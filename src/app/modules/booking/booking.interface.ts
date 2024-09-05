import { Types } from "mongoose";

export interface TBooking {
  customer: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  VehicleType:
    | "car"
    | "truck"
    | "SUV"
    | "van"
    | "motorcycle"
    | "bus"
    | "electricVehicle"
    | "hybridVehicle"
    | "bicycle"
    | "tractor";
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: string;
  registrationPlate: string;
}
