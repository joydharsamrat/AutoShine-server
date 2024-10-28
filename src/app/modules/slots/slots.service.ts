import { Slot } from "./slots.model";

const getAllSlots = async (query: { date?: string; serviceId?: string }) => {
  const queryObj: { date?: string; service?: string } = {};

  if (query.date) {
    queryObj.date = query.date;
  }
  if (query.serviceId) {
    queryObj.service = query.serviceId;
  }

  const result = await Slot.find(queryObj).populate("service");

  return { data: result };
};
const getSlotById = async (id: string) => {
  const result = await Slot.findById(id).populate("service");

  return { data: result };
};

export const slotServices = {
  getAllSlots,
  getSlotById,
};
