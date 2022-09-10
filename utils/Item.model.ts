import { model } from "mongoose";
import mongoose from "mongoose";
import { ItemInterface } from "./Item.schema";
import ItemSchema from "./Item.schema";

module.exports =
  mongoose.models["Item"] || model<ItemInterface>("Item", ItemSchema);
