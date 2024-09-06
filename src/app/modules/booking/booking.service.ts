import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { Service } from "../service/service.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Slot } from "../slots/slots.model";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../user/user.model";
import { startSession } from "mongoose";

const createBooking = async (payload: TBooking, user: JwtPayload) => {
  const { service, slot } = payload;

  const userData = await User.findOne({ email: user.email });

  const serviceData = await Service.findById(service);
  if (!serviceData || serviceData.isDeleted === true) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  const slotData = await Slot.findById(slot);

  if (!slotData) {
    throw new AppError(httpStatus.NOT_FOUND, "Slot not found");
  } else if (slotData.isBooked !== "available") {
    throw new AppError(httpStatus.CONFLICT, "Slot not available");
  } else if (slotData.service.toString() !== serviceData._id.toString()) {
    throw new AppError(
      httpStatus.UNPROCESSABLE_ENTITY,
      "Slot does not belong to the service"
    );
  }

  const session = await startSession();

  try {
    session.startTransaction();

    const bookSlot = await Slot.findByIdAndUpdate(
      payload.slot,
      {
        isBooked: "booked",
      },
      { new: true, session }
    );

    if (!bookSlot) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to book slot");
    }

    const bookingData = { ...payload, customer: userData?._id };

    const [result] = await Booking.create([bookingData], {
      new: true,
      session,
    });

    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to book slot");
    }

    await session.commitTransaction();
    const booking = await Booking.findById(result._id)
      .populate("slot")
      .populate("service")
      .populate("customer");
    return booking;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    await session.abortTransaction();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to book slot");
  }
};

const getAllBookings = async () => {
  const result = await Booking.find()
    .populate("customer")
    .populate("service")
    .populate("slot");
  return result;
};

export const bookingServices = {
  createBooking,
  getAllBookings,
};
