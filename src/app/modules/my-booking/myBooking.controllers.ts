import httpStatus from "http-status";
import catchAsync from "../../utils/catchasync";
import sendResponse from "../../utils/sendResponse";
import { MyBookingServices } from "./myBookings.service";

const handleGetBookings = catchAsync(async (req, res) => {
  const result = await MyBookingServices.getBookings(req.user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

export const MyBookingControllers = {
  handleGetBookings,
};
