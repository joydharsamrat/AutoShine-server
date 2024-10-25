import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { TService } from "./service.interface";
import { Service } from "./service.model";
import { Slot } from "../slots/slots.model";
import { TSlots } from "../slots/slots.interface";
import { generateSlots, timeToMinutes } from "./service.utils";

const createService = async (payLoad: TService) => {
  const result = await Service.create(payLoad);
  return { data: result };
};

const getSingleService = async (id: string) => {
  const result = await Service.findOne({ _id: id, isDeleted: false });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found !");
  }

  return { data: result };
};

const getAllServices = async () => {
  const result = await Service.find({ isDeleted: false });

  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found !");
  }

  return { data: result };
};

const getFeaturedServices = async () => {
  const result = await Service.find({ isDeleted: false, featured: true });
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found !");
  }

  return { data: result };
};

const updateService = async (id: string, payLoad: Partial<TService>) => {
  const service = await Service.findById(id);

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found");
  } else if (service.isDeleted === true) {
    throw new AppError(httpStatus.FORBIDDEN, "Service is deleted");
  }

  const result = await Service.findByIdAndUpdate(
    id,
    { $set: { ...payLoad } },
    { new: true }
  );
  return { data: result };
};

const deleteService = async (id: string) => {
  const service = await Service.findById(id);

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Data not found");
  }

  const result = await Service.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { new: true }
  );

  return { data: result };
};

const createSlots = async (payLoad: TSlots) => {
  const service = await Service.findById(payLoad.service);

  // check if service is  not available or deleted
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  } else if (service.isDeleted === true) {
    throw new AppError(httpStatus.FORBIDDEN, "Service is deleted");
  }

  // check if slots already exist for the service on that day

  const isSlotAlreadyExist = await Slot.findOne({
    service: payLoad.service,
    date: payLoad.date,
  });

  if (isSlotAlreadyExist) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      `Slots are already exist for ${service.name} on ${payLoad.date}`
    );
  }

  const startMin = timeToMinutes(payLoad.startTime);
  const endMin = timeToMinutes(payLoad.endTime);
  const slotsCount = Math.floor((endMin - startMin) / service.duration);

  const slots = generateSlots(
    slotsCount,
    startMin,
    service.duration,
    payLoad.date,
    payLoad.service
  );

  const result = await Slot.insertMany(slots);
  return { data: result };
};

export const serviceServices = {
  createService,
  getSingleService,
  getAllServices,
  getFeaturedServices,
  updateService,
  deleteService,
  createSlots,
};
