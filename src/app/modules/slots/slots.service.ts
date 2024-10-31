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

const getGroupedSlotsByService = async () => {
  const result = await Slot.aggregate([
    {
      $group: {
        _id: "$service",
        slots: {
          $push: {
            _id: "$_id",
            date: "$date",
            startTime: "$startTime",
            endTime: "$endTime",
            isBooked: "$isBooked",
            createdAt: "$createdAt",
            updatedAt: "$updatedAt",
          },
        },
      },
    },
    {
      $lookup: {
        from: "services",
        localField: "_id",
        foreignField: "_id",
        as: "serviceDetails",
      },
    },
    {
      $unwind: "$serviceDetails",
    },
    {
      $project: {
        _id: 0,
        serviceId: "$_id",
        serviceName: "$serviceDetails.name",
        slots: 1,
      },
    },
    {
      $sort: { serviceName: 1 },
    },
  ]);

  return { data: result };
};

const toggleSlotStatus = async (id: string, status: { status: string }) => {
  const result = await Slot.findByIdAndUpdate(
    id,
    { isBooked: status.status },
    { new: true }
  );

  return { data: result };
};

export const slotServices = {
  getAllSlots,
  getSlotById,
  getGroupedSlotsByService,
  toggleSlotStatus,
};
