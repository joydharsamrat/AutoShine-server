import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { TService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (payLoad: TService) => {
  const result = await Service.create(payLoad);
  return result;
};

const getSingleService = async (id: string) => {
  const result = await Service.findOne({ _id: id, isDeleted: false });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found !");
  }

  return result;
};

const getAllServices = async () => {
  const result = await Service.find({ isDeleted: false });

  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No service found !");
  }

  return result;
};

const updateService = async (id: string, payLoad: Partial<TService>) => {
  const service = await Service.isServiceExists(id);

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  } else if (service.isDeleted === true) {
    throw new AppError(httpStatus.FORBIDDEN, "Service is deleted");
  }

  const result = await Service.findByIdAndUpdate(
    id,
    { $set: { ...payLoad } },
    { new: true }
  );
  return result;
};

const deleteService = async (id: string) => {
  const service = await Service.isServiceExists(id);

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  const result = await Service.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { new: true }
  );

  return result;
};

export const serviceServices = {
  createService,
  getSingleService,
  getAllServices,
  updateService,
  deleteService,
};
