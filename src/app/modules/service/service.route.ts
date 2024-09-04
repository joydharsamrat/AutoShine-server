import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidationSchemas } from "./service.validation";
import { serviceControllers } from "./service.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(serviceValidationSchemas.createServiceValidationSchema),
  serviceControllers.handleCreateService
);

router.get("/:id", serviceControllers.handleGetSingleService);

router.get("/", serviceControllers.handleGetAllServices);

router.put(
  "/:id",
  validateRequest(serviceValidationSchemas.updateServiceValidationSchema),
  serviceControllers.handleUpdateService
);

export const serviceRoutes = router;
