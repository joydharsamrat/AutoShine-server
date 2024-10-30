import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidationSchemas } from "./service.validation";
import { serviceControllers } from "./service.controller";
import { slotValidationSchemas } from "../slots/slots.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create-service",
  auth("admin"),
  validateRequest(serviceValidationSchemas.createServiceValidationSchema),
  serviceControllers.handleCreateService
);

router.get("/", serviceControllers.handleGetAllServices);
router.get("/featured", serviceControllers.handleGetFeaturedServices);
router.get("/:id", serviceControllers.handleGetSingleService);

router.put(
  "/:id",
  auth("admin"),
  validateRequest(serviceValidationSchemas.updateServiceValidationSchema),
  serviceControllers.handleUpdateService
);

router.delete("/:id", auth("admin"), serviceControllers.handleDeleteService);

router.post(
  "/slots",
  auth("admin"),
  validateRequest(slotValidationSchemas.slotValidationSchema),
  serviceControllers.handleCreateSlots
);

export const serviceRoutes = router;
