import { TReview } from "./review.interface";
import { Review } from "./review.model";

const createReview = async (payload: TReview) => {
  const result = await Review.create(payload);
  return { data: result };
};

const getAllReviews = async (limit: number) => {
  const result = await Review.find()
    .sort("-createdAt")
    .limit(limit)
    .populate("user", "name");

  const totalReviews = await Review.countDocuments();

  const totalRating = await Review.aggregate([
    {
      $group: {
        _id: null,
        sum: { $sum: "$rating" },
      },
    },
  ]);

  const overallRating =
    totalReviews > 0
      ? Number((totalRating[0]?.sum / totalReviews).toFixed(1))
      : 0;

  return { data: result, overallRating, totalReviews };
};

export const reviewServices = {
  createReview,
  getAllReviews,
};
