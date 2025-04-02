import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const dbconnect = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected , DB Host: ${connectioninstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
export default dbconnect;
