import { Model } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  address: string;
}

export interface TUserModel extends Model<TUser> {
  isUserExist(id: string): Promise<TUser>;
}
