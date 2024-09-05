import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBooking = async (payload: TBooking) => {
  const result = await Booking.create(payload);
  return result;
};

export const bookingServices = {
  createBooking,
};
