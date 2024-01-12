import { Schema, model } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  username: string;
  password: string;
}

const UsersSchema = new Schema({
  email: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  username: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: "string",
    required: true,
    length: [8, "Password must be at least 8 Charecters"],
  },
});

export const User = model<UserDocument>("User", UsersSchema);
