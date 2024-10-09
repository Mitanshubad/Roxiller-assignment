
import mongoose from "mongoose";




const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}` as string);

    console.log(`\n MongoDB connection DB HOST : ${connectionInstance.connection.host}`);

  } catch (error) {
    console.log("\n MONGODB connection Failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
