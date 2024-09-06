import httpStatus from "http-status";
import catchAsync from "../../utils/catchasync";
import sendResponse from "../../utils/sendResponse";
import { bookingServices } from "./booking.service";

const handleCreateBooking = catchAsync(async (req, res) => {
  const user = req.user;

  const result = await bookingServices.createBooking(req.body, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot booked successfully",
    data: result,
  });
});

const handleGetAllBookings = catchAsync(async (req, res) => {
  const result = await bookingServices.getAllBookings();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: result,
  });
});

export const bookingControllers = {
  handleCreateBooking,
  handleGetAllBookings,
};
