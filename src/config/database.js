import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}`
    );
    console.log(
      `Connected to the database! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Failed database connection");
    process.exit();
  }
};

export default connectDB;
