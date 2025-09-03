import express from "express";

const router = express.Router();

// GET - fetch all users
router.get("/getallusers", (req, res) => {
  try {
    res.status(200).json({ msg: "Get All Users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message || "Internal Server Error" });
  }
});

// POST - add a new user
router.post("/add", (req, res) => {
  try {
    const { name, email } = req.body; // example fields
    res.status(201).json({ msg: "User Added Successfully", data: { name, email } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message || "Internal Server Error" });
  }
});

// PUT - update a user by ID
router.put("/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body; // example fields
    res.status(200).json({ msg: `User with ID ${id} Updated`, data: { name, email } });
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
