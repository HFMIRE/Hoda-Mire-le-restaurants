import dbConnect from "../../../utils/dbConnect";
import Item from "../../../utils/Item.model";

const ItemData = async (req, res) => {
  await dbConnect();

  try {
    const itemData = await Item.find({}).exec();
    res.status(200).json({ success: true, data: itemData });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

export default ItemData;
