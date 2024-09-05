import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";
import { vehicleType } from "./booking.constant";

const bookingSchema = new Schema<TBooking>({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  slot: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  VehicleType: {
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
    type: String,
    required: true,
  },
  registrationPlate: {
    type: String,
    required: true,
  },
});

export const Booking = model<TBooking>("booking", bookingSchema);
