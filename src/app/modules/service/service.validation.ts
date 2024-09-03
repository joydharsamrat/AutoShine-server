import { z } from "zod";

const serviceValidationSchema = z.object({
  name: z.string({ required_error: "Name is required !" }),
  description: z.string({ required_error: "Description is required !" }),
  price: z.number({ required_error: "Price is required !" }),
  duration: z.number({ required_error: "Duration is required !" }),
  isDeleted: z.boolean().optional(),
});

export const serviceValidationSchemas = {
  serviceValidationSchema,
};
