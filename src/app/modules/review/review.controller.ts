import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { reviewServices } from "./review.service";

const handleCreateReview = catchAsync(async (req, res) => {
  const result = await reviewServices.createReview(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review added successfully",
    data: result,
  });
});

const handleGetAllReviews = catchAsync(async (req, res) => {
  const limit = Number(req.query.limit) || 0;

  const result = await reviewServices.getAllReviews(limit);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrieved successfully",
    data: result,
  });
});

export const reviewControllers = {
  handleCreateReview,
  handleGetAllReviews,
};
