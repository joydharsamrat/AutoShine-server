export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  address: string;
}

export type TUserRole = "admin" | "user";
