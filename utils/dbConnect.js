import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  // check if connection exist
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URL, {
    //get rid of warning
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection);
}

export default dbConnect;
