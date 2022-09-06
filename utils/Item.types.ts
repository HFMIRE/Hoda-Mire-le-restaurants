import { Document, Model } from "mongoose";
export interface Item {
  name: String;
  description: String;
  dietary: String;
  price: Number;
  allergies: [String];
  type: String;
  image: String;
}
export interface ItemDocument extends Item, Document {}
export interface ItemDrModel extends Model<ItemDocument> {}
