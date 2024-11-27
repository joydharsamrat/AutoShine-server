import express from "express";
import { DashboardStatsControllers } from "./dashboardStats.controllers";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get(
  "/monthly-revenue",
  auth("admin"),
  DashboardStatsControllers.handleGetMonthlyRevenue
);
router.get(
  "/monthly-bookings",
  auth("admin"),
  DashboardStatsControllers.handleGetMonthlyBookings
);

router.get(
  "/latest-bookings",
  auth("admin"),
  DashboardStatsControllers.handleGetLatestBookings
);

export const dashboardStatsRoutes = router;
