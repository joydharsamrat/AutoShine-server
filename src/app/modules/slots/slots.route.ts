import express from "express";
import { slotControllers } from "./slots.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", slotControllers.handleGetAvailableSlots);
router.get(
  "/grouped",
  auth("admin"),
  slotControllers.handleGetGroupedSlotsByService
);

router.get("/:id", slotControllers.handleGetSlotById);

router.put(
  "/toggle-status/:id",
  auth("admin"),
  slotControllers.handleToggleSlotStatus
);

export const slotRoutes = router;
