import express from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { serviceRoutes } from "../modules/service/service.route";
import { slotRoutes } from "../modules/slots/slots.route";
import { bookingRoutes } from "../modules/booking/booking.route";
import { myBookingRoutes } from "../modules/my-booking/myBooking.route";
import { reviewRoutes } from "../modules/review/review.route";

const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: authRoutes },
  { path: "/services", route: serviceRoutes },
  { path: "/slots", route: slotRoutes },
  { path: "/bookings", route: bookingRoutes },
  { path: "/my-bookings", route: myBookingRoutes },
  { path: "/reviews", route: reviewRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
