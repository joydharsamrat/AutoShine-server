import { model, Schema } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>(
  {
    user: {
      type: Schema.ObjectId,
      ref: "user",
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Review = model<TReview>("review", reviewSchema);
