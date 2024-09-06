import express from "express";
import { bookingControllers } from "./booking.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/", auth("user"), bookingControllers.handleCreateBooking);

export const bookingRoutes = router;
