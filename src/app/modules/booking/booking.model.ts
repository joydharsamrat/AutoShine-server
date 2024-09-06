import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";
import { vehicleType } from "./booking.constant";

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
    vehicleType: {
      type: String,
      enum: vehicleType,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    registrationPlate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Booking = model<TBooking>("booking", bookingSchema);
