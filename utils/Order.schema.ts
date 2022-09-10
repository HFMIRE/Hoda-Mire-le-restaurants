import { Schema } from "mongoose";
import { Document, Model } from "mongoose";
export interface OrderInterface {
  items: {
    itemId: string;
    qty: number;
  }[];
  orderTotal: number;
  tableNumber: number;
  userId: string;
}

const OrderSchema = new Schema<OrderInterface>({
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
