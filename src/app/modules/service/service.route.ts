import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidationSchemas } from "./service.validation";
import { serviceControllers } from "./service.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(serviceValidationSchemas.serviceValidationSchema),
  serviceControllers.handleCreateService
);

router.get("/:id", serviceControllers.handleGetSingleService);

router.get("/", serviceControllers.handleGetAllServices);

export const serviceRoutes = router;
