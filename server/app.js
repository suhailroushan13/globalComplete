import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Importing User Apis

import "./utils/dbConnect.js"

import userRouter from "./controllers/user/index.js";

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
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
