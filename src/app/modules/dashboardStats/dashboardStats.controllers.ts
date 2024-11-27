import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { databaseStatsServices } from "./dashboardStats.services";

const handleGetMonthlyRevenue = catchAsync(async (req, res) => {
  const result = await databaseStatsServices.getMonthlyRevenue();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Monthly revenue retrieved successfully",
    data: result,
  });
});
const handleGetMonthlyBookings = catchAsync(async (req, res) => {
  const result = await databaseStatsServices.getMonthlyBookings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Monthly bookings retrieved successfully",
    data: result,
  });
});

const handleGetLatestBookings = catchAsync(async (req, res) => {
  const result = await databaseStatsServices.getLatestBookings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Latest bookings retrieved successfully",
    data: result,
  });
});

export const DashboardStatsControllers = {
  handleGetMonthlyRevenue,
  handleGetMonthlyBookings,
  handleGetLatestBookings,
};
