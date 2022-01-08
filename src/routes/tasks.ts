// import libs
import express from "express";

// import controllers
import * as tasks from "../controllers/tasks";

// constants
const router = express.Router();

// routes
router
  .route("/")
  .get(tasks.getAllTasks)
  .post(tasks.createTask);

router
  .route("/:id")
  .get(tasks.getTask)
  .put(tasks.updateTask)
  .delete(tasks.deleteTask);

export default router;
