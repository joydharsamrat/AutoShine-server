import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slotServices } from "./slots.service";

const handleGetAvailableSlots = catchAsync(async (req, res) => {
  const result = await slotServices.getAllSlots(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});
const handleGetSlotById = catchAsync(async (req, res) => {
  const result = await slotServices.getSlotById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

const handleGetGroupedSlotsByService = catchAsync(async (req, res) => {
  const result = await slotServices.getGroupedSlotsByService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Slots retrieved successfully",
    data: result,
  });
});

const handleToggleSlotStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await slotServices.toggleSlotStatus(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Slots retrieved successfully",
    data: result,
  });
});

export const slotControllers = {
  handleGetAvailableSlots,
  handleGetSlotById,
  handleGetGroupedSlotsByService,
  handleToggleSlotStatus,
};
