import mongoose from "mongoose";

const connect = async () => {
  const MONGO_URI = process.env.MONGO_URI!;

  mongoose.connect(MONGO_URI, {
    dbName: "resume",
  });
};

export default connect;
