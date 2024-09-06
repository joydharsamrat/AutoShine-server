import express from "express";
import auth from "../../middlewares/auth";
import { MyBookingControllers } from "./myBooking.controllers";

const router = express.Router();

router.get("/", auth("user"), MyBookingControllers.handleGetBookings);

export const myBookingRoutes = router;
