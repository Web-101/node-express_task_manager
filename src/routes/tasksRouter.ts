// imports
import express from "express";
import * as tasks from "../controllers/tasksController";

// constants
const router = express.Router();

// routes
router
  .route("/tasks")
  .get(tasks.getAllTasks)
  .post(tasks.createTask);

router
  .route("/tasks/:id")
  .get(tasks.getTask)
  .put(tasks.updateTask)
  .delete(tasks.deleteTask);

export default router;
