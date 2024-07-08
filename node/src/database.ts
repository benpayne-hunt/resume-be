import mongoose from "mongoose";

const connect = async () => {
  const MONGO_URI = process.env.MONGO_URI!;

  mongoose.connect(MONGO_URI);
};

export default connect;
