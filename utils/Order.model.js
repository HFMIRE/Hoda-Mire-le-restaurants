import { model } from "mongoose";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const OrderSchema = new Schema({
  items: [
    {
      itemId: String,
      qty: Number,
    },
  ],
  orderTotal: Number,
  tableNumber: String,
  userId: String,
});

export default mongoose.models["Order"] || model("Order", OrderSchema);
