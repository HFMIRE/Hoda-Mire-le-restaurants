// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import { ItemModel } from "../../../utils/Item.model";

type Data = {
  success: boolean;
  Data: {} | undefined;
};

const ItemData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await dbConnect();

  try {
    const itemData = await ItemModel.find({}).exec();
    res.status(200).json({ success: true, Data: itemData });
  } catch (err) {
    res.status(400).json({
      success: false,
      Data: undefined,
    });
  }
};

export default ItemData;
