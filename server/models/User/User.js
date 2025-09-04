import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 10,
    max: 80,
  },
});


const userModel = mongoose.model("users",userSchema)
export default userModel