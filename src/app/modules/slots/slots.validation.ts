import { z } from "zod";

const slotValidationSchema = z.object({
  service: z.string({ required_error: "Service is required !" }),
  date: z.string({ required_error: "Date is required !" }),
  startTime: z.string({ required_error: "Start Time is required !" }),
  endTime: z.string({ required_error: "End Time is required !" }),
  isBooked: z.enum(["available", "booked", "canceled"]).optional(),
});

export const slotValidationSchemas = {
  slotValidationSchema,
};
