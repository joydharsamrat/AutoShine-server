import { Model } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  address: string;
  passwordChangedAt?: Date;
}

export interface TUserModel extends Model<TUser> {
  isJwtIssuedBeforePasswordChanged(
    passwordChangeTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}

export type TUserRole = "admin" | "user";
