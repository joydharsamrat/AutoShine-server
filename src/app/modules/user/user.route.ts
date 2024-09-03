import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { testValidationSchemas } from "./user.validation";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(testValidationSchemas.userValidationSchema),
  userControllers.handleCreateUser
);

export const userRoutes = router;
