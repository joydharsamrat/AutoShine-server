import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { TUser, TUserModel } from "./user.interface";
import config from "../../config";

const userSchema = new Schema<TUser, TUserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salts));
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.static("isUserExist", async function (email: string) {
  const user = await User.findOne({ email }).select("+password");
  return user;
});

export const User = model<TUser, TUserModel>("user", userSchema);
