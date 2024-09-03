import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const result = User.create(payload);
  return result;
};

export const userServices = {
  createUser,
};
