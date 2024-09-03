import httpStatus from "http-status";
import catchAsync from "../../utils/catchasync";
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

export const serviceControllers = {
  handleCreateService,
};
