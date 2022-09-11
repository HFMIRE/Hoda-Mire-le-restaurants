import { model } from "mongoose";
import mongoose from "mongoose";
import ItemSchema from "./Item.schema";

export default mongoose.models["Item"] || model("Item", ItemSchema);
