import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { reviewValidationSchemas } from "./review.validation";
import { reviewControllers } from "./review.controller";

const router = express.Router();

router.post(
  "/create-review",
  auth("user"),
  validateRequest(reviewValidationSchemas.reviewValidationSchema),
  reviewControllers.handleCreateReview
);
router.get("/", reviewControllers.handleGetAllReviews);

export const reviewRoutes = router;
