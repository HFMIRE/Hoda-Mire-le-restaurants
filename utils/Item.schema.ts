import { Schema } from "mongoose";
export interface ItemInterface {
  name: string;
  description: string;
  price: number;
  allergies: [string];
  type: string;
  image: string;
}

const ItemSchema = new Schema<ItemInterface>({
  name: String,
  description: String,
  price: Number,
  allergies: [String],
  type: String,
  image: String,
});

export default ItemSchema;
