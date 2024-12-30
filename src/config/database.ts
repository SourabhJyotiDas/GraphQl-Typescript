import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TsGRaphQl");
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("database connection failed !");
  }
};
