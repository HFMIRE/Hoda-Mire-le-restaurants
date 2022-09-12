// this endpint - deals with User +  display the order + edit the order + delete the order  + add a order
import dbConnect from "../../../utils/dbConnect";
import User from "../../../utils/User.model";

const UserApi = async (req, res) => {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      const { id } = req.query;
      console.log("id", id);
      try {
        // this gets all of user
        const Users = await User.find({ _id: id }).exec();
        res.status(200).json({ success: true, data: Users });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // add new user
        console.log("req.body", req.body);
        const newUser = await User.create(req.body);
        console.log("created a user");
        res.status(200).json({ success: true });
      } catch (err) {
        res.status(400).json({ success: false });
      }
  }
};

export default UserApi;
