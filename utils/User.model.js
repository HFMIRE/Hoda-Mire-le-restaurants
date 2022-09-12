import { model } from "mongoose";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  image: String,
  email: String,
});

export default mongoose.models["User"] || model("User", UserSchema);
