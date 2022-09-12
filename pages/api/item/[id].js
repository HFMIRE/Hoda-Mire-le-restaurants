import dbConnect from "../../../utils/dbConnect";
import Item from "../../../utils/Item.model";

const ItemData = async (req, res) => {
  await dbConnect();
  const { id } = req.query;

  try {
    const itemData = await Item.find({ _id: id }).exec();
    res.status(200).json({ success: true, data: itemData[0] });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

export default ItemData;
