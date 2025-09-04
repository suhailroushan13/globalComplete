import express from "express";

const router = express.Router();

// GET - fetch all users (dummy data)
router.get("/getallusers", async (req, res) => {
  try {
    
    res.status(200).json({ msg: "Hello" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// POST - add a new user (dummy response)
router.post("/add", async (req, res) => {
  try {
    const { fullName, email, age, phone } = req.body;
    console.log(fullName, email, age, phone);

    res.status(201).json({ msg: "user added in my db successfully (dummy)" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// PUT - update a user by ID (dummy response)
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { fullName, email, age, phone } = req.body;
    console.log(`Updating user ${id} with data:`, req.body);

    res.status(200).json({ msg: `User with ID ${id} updated successfully (dummy)` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// DELETE - delete a user by ID (dummy response)
router.delete("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting user with ID: ${id}`);

    res.status(200).json({ msg: `User with ID ${id} deleted successfully (dummy)` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default router;
