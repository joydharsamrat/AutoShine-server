import { model, Schema } from "mongoose";
import { TSlots } from "./slots.interface";

const slotsSchema = new Schema<TSlots>({
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

export const Slot = model<TSlots>("slot", slotsSchema);
