import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { serviceServices } from "./service.service";

const handleCreateService = catchAsync(async (req, res) => {
  const result = await serviceServices.createService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

const handleGetSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.getSingleService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});

const handleGetAllServices = catchAsync(async (req, res) => {
  const result = await serviceServices.getAllServices(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Services retrieved successfully",
    data: result,
  });
});
const handleGetFeaturedServices = catchAsync(async (req, res) => {
  const result = await serviceServices.getFeaturedServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Featured services retrieved successfully",
    data: result,
  });
});

const handleUpdateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.updateService(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});

const handleDeleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.deleteService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully",
    data: result,
  });
});

const handleCreateSlots = catchAsync(async (req, res) => {
  const result = await serviceServices.createSlots(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});

export const serviceControllers = {
  handleCreateService,
  handleGetSingleService,
  handleGetAllServices,
  handleGetFeaturedServices,
  handleUpdateService,
  handleDeleteService,
  handleCreateSlots,
};
