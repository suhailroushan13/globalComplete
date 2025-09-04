import express from "express";
import userModel from "../../models/User/User.js";

const router = express.Router();

// GET - fetch all users
router.get("/getallusers", async (req, res) => {
  try {
    let allUsers = await userModel.find();
    console.log(allUsers);
    res.status(200).json({ msg: allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// POST - add a new user
router.post("/add", async (req, res) => {
  try {
    const { fullName, email, age, phone } = req.body; // example fields
    console.log(fullName, email, age, phone);

    let addUser = await userModel.create({ fullName, email, age, phone });
    res.status(201).json({ msg: "user added in my db successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message || "Internal Server Error" });
  }
});

// PUT - update a user by ID
router.put("/update/:id", async (req, res) => {
  try {
    // const { id } = req.params;
    const id = req.params.id;

    const { fullName, age, phone, email } = req.body; // example fields
    const updatingUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({msg:"user is updated successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message || "Internal Server Error" });
  }
});

// DELETE - delete a user by ID
router.delete("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ msg: `User with ID ${id} Deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message || "Internal Server Error" });
  }
});

export default router;
