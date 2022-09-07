import { model } from "mongoose";
import mongoose from "mongoose";
import { ItemInterface } from "./Item.types";
import ItemSchema from "./Item.schema";

module.exports =
  mongoose.models["Item"] || model<ItemInterface>("Item", ItemSchema);
