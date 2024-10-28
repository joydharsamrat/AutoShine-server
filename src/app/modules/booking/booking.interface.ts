import { Types } from "mongoose";

export interface TBooking {
  customer?: Types.ObjectId;
  service?: Types.ObjectId;
  slot?: Types.ObjectId;
}

export interface TBookingPayload extends TBooking {
  serviceId?: string;
  slotId?: string;
}
