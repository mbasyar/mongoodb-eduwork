const express = require("express");
const {
  deleteUser,
  getUserById,
  getUsers,
  saveUser,
  updateUser,
} = require("../controller/controller");

const router = express.Router();

// GET
router.get("/", getUsers);

// GET by id
router.get("/:id", getUserById);

// POST
router.post("/", saveUser);

// PATCH
router.patch("/:id", updateUser);

// DELETE by id
router.delete("/:id", deleteUser);

module.exports = router;