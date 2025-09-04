import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbConnect() {
  try {
    let URL = process.env.DB_URL;
    await mongoose.connect(URL); // main imp line to connect db
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
}

dbConnect();
