import express from "express";
import { paymentControllers } from "./payment.controller";

const router = express.Router();

router.post("/", paymentControllers.handleInitiatePayment);
router.post("/success", paymentControllers.handlePaymentSuccess);
router.post("/fail", paymentControllers.handlePaymentFail);

export const paymentRoutes = router;
