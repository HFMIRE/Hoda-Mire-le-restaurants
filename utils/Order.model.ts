import { model } from "mongoose";
import mongoose from "mongoose";
import { OrderInterface } from "./Order.schema";
import OrderSchema from "./Order.schema";

module.exports =
  mongoose.models["Order"] || model<OrderInterface>("Order", OrderSchema);
