import { Document, Model } from "mongoose";
export interface ItemInterface {
  name: String;
  description: String;
  dietary: String;
  price: Number;
  allergies: [String];
  type: String;
  image: String;
}
