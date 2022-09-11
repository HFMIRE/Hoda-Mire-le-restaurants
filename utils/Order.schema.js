import { Schema } from "mongoose";
import { Document, Model } from "mongoose";

const OrderSchema = new Schema({
  items: [
    {
      itemId: String,
      qty: Number,
    },
  ],
  orderTotal: Number,
  tableNumber: Number,
  userId: String,
});

export default OrderSchema;
