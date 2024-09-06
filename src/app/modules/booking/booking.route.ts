import express from "express";
import { bookingControllers } from "./booking.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { bookingValidationSchemas } from "./booking.validation";

const router = express.Router();

router.post(
  "/",
  auth("user"),
  validateRequest(bookingValidationSchemas.bookingValidationSchema),
  bookingControllers.handleCreateBooking
);

router.get("/", auth("admin"), bookingControllers.handleGetAllBookings);

export const bookingRoutes = router;
