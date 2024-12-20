import { z } from "zod";

const NewsletterValidationSchema = z.object({
  email: z.string().email("email has to be valid"),
});

export const newsletterValidationSchemas = {
  NewsletterValidationSchema,
};
