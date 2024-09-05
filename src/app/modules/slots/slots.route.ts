import express from "express";
import { slotControllers } from "./slots.controller";

const router = express.Router();

router.get("/availability", slotControllers.handleGetAvailableSlots);

export const slotRoutes = router;
