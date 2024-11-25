import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      ...req.body,
      ...req.cookies,
    });
    next();
  });
};

export default validateRequest;
