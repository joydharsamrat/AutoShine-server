import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidationSchemas } from "./service.validation";
import { serviceControllers } from "./service.controller";
import { slotValidationSchemas } from "../slots/slots.validation";

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

router.delete("/:id", serviceControllers.handleDeleteService);

router.post(
  "/slots",
  validateRequest(slotValidationSchemas.slotValidationSchema),
  serviceControllers.handleCreateSlots
);

export const serviceRoutes = router;
