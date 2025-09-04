import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbConnect() {

    
    await mongoose.connect(process.env.DB_URL); // main imp line to connect db
    console.log("DB Connected Successfully");
  
}

dbConnect();
