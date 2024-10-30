/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import config from "../config";
import zodErrorHandler from "../errors/zodErrorHandler";
import { ZodError } from "zod";
import { TErrorSource } from "../interface/error";
import handleValidationError from "../errors/validationErrorHandler";
import handleCastError from "../errors/casterrorHandler";
import handleDuplicateError from "../errors/duplicateErrorHandler";
import AppError from "../errors/appError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err?.status || 500;
  let message = err?.message || "something went wrong !";

  let errorSources: TErrorSource = [
    {
      path: "",
      message: "something went wrong !",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandler(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }
  res.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
    stack: config.node_ENV === "development" ? err.stack : null,
  });
};

export default globalErrorHandler;
