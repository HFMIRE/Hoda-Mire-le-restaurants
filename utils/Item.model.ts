import { model } from "mongoose";
import { ItemDocument } from "./Item.types";
import ItemSchema from "./Item.schema";

export const ItemModel = model<ItemDocument>("Item", ItemSchema);
