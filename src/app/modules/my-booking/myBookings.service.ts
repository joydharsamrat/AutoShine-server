import { JwtPayload } from "jsonwebtoken";
import { Booking } from "../booking/booking.model";
import { User } from "../user/user.model";
import AppError from "../../errors/appError";
import httpStatus from "http-status";

const getBookings = async (user: JwtPayload) => {
  const userData = await User.findOne({ email: user.email }).select("_id");

  const result = await Booking.find({ customer: userData?._id })
    .populate("customer")
    .populate("service")
    .populate("slot");

  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found");
  }
  return result;
};

export const MyBookingServices = {
  getBookings,
};
