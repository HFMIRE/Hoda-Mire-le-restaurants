import { model } from "mongoose";
import mongoose from "mongoose";
import OrderSchema from "./Order.schema";

export default mongoose.models["Order"] || model("Order", OrderSchema);
