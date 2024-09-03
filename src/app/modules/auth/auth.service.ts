import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { User } from "../user/user.model";
import { TAuth } from "./auth.interface";
import bcrypt from "bcrypt";

const loginUser = async (payload: TAuth) => {
  const user = await User.isUserExist(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  const isPasswordMatched = bcrypt.compare(payload.password, user.password);

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Wrong Password !");
  }
};

export const authServices = {
  loginUser,
};
