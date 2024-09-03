import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { User } from "../user/user.model";
import { TAuth } from "./auth.interface";
import bcrypt from "bcrypt";
import createToken from "./auth.utils";
import config from "../../config";
import { TUser } from "../user/user.interface";

const userSignUp = async (payload: TUser) => {
  const result = User.create(payload);
  return result;
};

const loginUser = async (payload: TAuth) => {
  const user = await User.isUserExist(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Password is incorrect !");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_token_secret as string,
    "1d"
  );

  return token;
};

export const authServices = { userSignUp, loginUser };
