import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import Item from "../../../utils/Item.model";
type Data = {
  success: boolean;
  data?: {};
};

const ItemData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await dbConnect();
  const { id } = req.query;
  console.log("id", id);
  try {
    const itemData = await Item.find({ _id: id }).exec();
    res.status(200).json({ success: true, data: itemData[0] });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

export default ItemData;
