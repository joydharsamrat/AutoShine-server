import { z } from "zod";
import { vehicleType } from "./booking.constant";

const bookingValidationSchema = z.object({
  customer: z.string({ required_error: "Customer id is required" }),
  service: z.string({ required_error: "Service ID is required" }),
  slot: z.string({ required_error: "Slot ID is required" }),
  VehicleType: z.enum([...(vehicleType as [string, ...string[]])], {
    required_error: "Vehicle Type is required",
  }),
  vehicleBrand: z.string({ required_error: "Vehicle brand is required" }),
  vehicleModel: z.string({ required_error: "Vehicle model is required" }),
  manufacturingYear: z
    .string({ required_error: "Vehicle manufacturing year is required" })
    .min(4, "Manufacturing year must be 4 characters")
    .max(4, "Manufacturing year must be 4 characters"),
  registrationPlate: z.string({
    required_error: "Registration plate is required",
  }),
});

export const bookingValidationSchemas = {
  bookingValidationSchema,
};
