import { Schema } from "mongoose";
import { ItemInterface } from "./Item.types";

const ItemSchema = new Schema<ItemInterface>({
  name: String,
  description: String,
  dietary: String,
  price: Number,
  allergies: [String],
  type: String,
  image: String,
});

export default ItemSchema;
