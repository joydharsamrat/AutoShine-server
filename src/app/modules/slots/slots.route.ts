import express from "express";
import { slotControllers } from "./slots.controller";

const router = express.Router();

router.get("/", slotControllers.handleGetAvailableSlots);

router.get("/:id", slotControllers.handleGetSlotById);

export const slotRoutes = router;
