import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "service",
      required: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: "slot",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Booking = model<TBooking>("booking", bookingSchema);
