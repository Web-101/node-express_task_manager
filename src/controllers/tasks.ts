// import libs
import express from "express";

// import files
import taskModel from "../models/tasks";

// no query params
export function getAllTasks(req: express.Request, res: express.Response) {
  res.send("all tasks here!");
}

export function createTask(req: express.Request, res: express.Response) {
  taskModel
    .create(req.body)
    .then((task) => res.status(201).send(task))
    .catch((err) => res.status(400).send(err));
}

// query by id
export function getTask(req: express.Request, res: express.Response) {
  const id: string = req.params.id;

  res.send(`tasks by id here! ${id}`);
}

export function updateTask(req: express.Request, res: express.Response) {
  const id: string = req.params.id;

  res.send(`update task here! ${id}`);
}

export function deleteTask(req: express.Request, res: express.Response) {
  const id: string = req.params.id;

  res.send(`delete task here! ${id}`);
}
