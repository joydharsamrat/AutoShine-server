import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email address must be valid !" }),
  password: z.string({ required_error: "Password is required" }),
  phone: z.string({ required_error: "Phone is required" }),
  role: z.enum(["user", "admin"]),
  address: z.string({ required_error: "Address is required" }),
});
export const testValidationSchemas = {
  userValidationSchema,
};
