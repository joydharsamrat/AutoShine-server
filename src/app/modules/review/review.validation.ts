import { z } from "zod";

// Define the Zod schema for a review
const reviewValidationSchema = z.object({
  user: z.string({ required_error: "User ID is required" }),
  review: z.string({ required_error: "Review is required" }),
  rating: z
    .number({ required_error: "Rating is required" })
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"), // Rating between 1 and 5
});

export const reviewValidationSchemas = { reviewValidationSchema };
