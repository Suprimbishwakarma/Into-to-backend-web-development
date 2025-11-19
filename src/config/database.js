import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectioInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}`
    );
    console.log(
      `Connected to the database! ${connectioInstance.connection.host}`
    );
  } catch (error) {
    console.log("Failed database connection");
    process.exit();
  }
};

export default connectDB;
