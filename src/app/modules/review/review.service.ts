import { TReview } from "./review.interface";
import { Review } from "./review.model";

const createReview = async (payload: TReview) => {
  const result = await Review.create(payload);
  return { data: result };
};

export const reviewServices = {
  createReview,
};
