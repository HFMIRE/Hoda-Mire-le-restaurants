import { model } from "mongoose";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const ItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  allergies: [String],
  type: String,
  image: String,
});

export default mongoose.models["Item"] || model("Item", ItemSchema);
