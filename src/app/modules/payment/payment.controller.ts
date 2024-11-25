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
  const { pg_txnid } = req.body;

  const redirectUrl = `https://auto-shine.vercel.app/booking/success?transactionId=${pg_txnid}`;

  res.redirect(redirectUrl);
});

const handlePaymentFail = catchAsync(async (req, res) => {
  res.redirect("https://auto-shine.vercel.app//booking/failed");
});

export const paymentControllers = {
  handleInitiatePayment,
  handlePaymentSuccess,
  handlePaymentFail,
};
