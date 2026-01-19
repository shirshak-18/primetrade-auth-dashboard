//external module
const express = require("express");
//local module
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTask,
  readTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, readTask);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
