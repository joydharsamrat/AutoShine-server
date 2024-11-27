/* eslint-disable @typescript-eslint/no-explicit-any */
import { JwtPayload } from "jsonwebtoken";
import { Booking } from "../booking/booking.model";
import { User } from "../user/user.model";
import AppError from "../../errors/appError";
import httpStatus from "http-status";
import { isUpcoming } from "../../utils/isUpcoming";

const getBookings = async (user: JwtPayload) => {
  const userData = await User.findOne({ email: user.email }).select("_id");

  const result = await Booking.find({ customer: userData?._id })
    .populate("customer")
    .populate("service")
    .populate("slot");

  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found");
  }

  const bookings = result.reduce(
    (acc: any, booking: any) => {
      const { date, startTime } = booking?.slot || {};

      if (isUpcoming(date, startTime)) {
        acc.upcoming.push(booking);
      } else {
        acc.past.push(booking);
      }

      return acc;
    },
    { upcoming: [], past: [] }
  );

  bookings.upcoming.sort((a: any, b: any) => {
    const aDate = new Date(`${a?.slot?.date}T${a?.slot?.startTime}`);
    const bDate = new Date(`${b?.slot?.date}T${b?.slot?.startTime}`);
    return aDate.getTime() - bDate.getTime();
  });
  bookings.past.sort((a: any, b: any) => {
    const aDate = new Date(`${a?.slot?.date}T${a?.slot?.startTime}`);
    const bDate = new Date(`${b?.slot?.date}T${b?.slot?.startTime}`);
    return aDate.getTime() - bDate.getTime();
  });

  return bookings;
};

export const MyBookingServices = {
  getBookings,
};
