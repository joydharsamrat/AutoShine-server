import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { paymentServices } from "./payment.service";

const handleInitiatePayment = catchAsync(async (req, res) => {
  const result = await paymentServices.initiatePayment(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "payment initiated successfully",
    data: result,
  });
});
const handlePaymentSuccess = catchAsync(async (req, res) => {
  const result = await paymentServices.payMentSuccess(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "payment  successful",
    data: result,
  });
});
const handlePaymentFail = catchAsync(async (req, res) => {
  const result = await paymentServices.payMentFail(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "payment  successful",
    data: result,
  });
});

export const paymentControllers = {
  handleInitiatePayment,
  handlePaymentSuccess,
  handlePaymentFail,
};
