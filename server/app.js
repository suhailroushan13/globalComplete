import express from "express"; // we are importing express package
import dotenv from "dotenv"; // we are importing dotenv 
dotenv.config(); // for using values from .env 

const app = express(); // create a variable app and store complete express function

const PORT = process.env.PORT; // this we are getting from a file name .env

// Importing User Apis

import "./utils/dbConnect.js" // (DB Connection Line)


// ALL IMPORT API's

import userRouter from "./controllers/user/index.js";

app.use(express.json())  // to accept data from postman

app.get("/", (req, res) => {
  try {
    re.status(200).json({ msg: "Hello Server" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.use("/user", userRouter);


// http://localhost:5004/user/getallusers 
// http://localhost:5004/user/add

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
