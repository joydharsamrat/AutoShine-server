import { Slot } from "./slots.model";

const getAvailableSlots = async (query: {
  date?: string;
  serviceId?: string;
}) => {
  const queryObj: { isBooked: string; date?: string; service?: string } = {
    isBooked: "available",
  };

  if (query.date) {
    queryObj.date = query.date;
  }
  if (query.serviceId) {
    queryObj.service = query.serviceId;
  }

  const result = await Slot.find(queryObj).populate("service");

  return result;
};

export const slotServices = {
  getAvailableSlots,
};
