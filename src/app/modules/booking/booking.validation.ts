import { z } from "zod";

const bookingValidationSchema = z.object({
  serviceId: z.string({ required_error: "Service ID is required" }),
  slotId: z.string({ required_error: "Slot ID is required" }),
});

export const bookingValidationSchemas = {
  bookingValidationSchema,
};
