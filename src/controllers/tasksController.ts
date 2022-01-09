// import libs
import express from "express";

// import files
import taskModel from "../models/tasksModel";

// no query params
export function getAllTasks(req: express.Request, res: express.Response) {
  taskModel
    .find()
    .then((tasks: any) => res.json(tasks))
    .catch((err: any) => res.status(400).json(err));
}

export function createTask(req: express.Request, res: express.Response) {
  taskModel
    .create(req.body)
    .then((task) => res.status(201).json(task))
    .catch((err) => res.status(400).json(err));
}

// query by id
export function getTask(req: express.Request, res: express.Response) {
  const id: string = req.params.id;

  taskModel
    .findById(id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
}

export function updateTask(req: express.Request, res: express.Response) {
  const id: string = req.params.id;

  res.send(`update task here! ${id}`);
}

export function deleteTask(req: express.Request, res: express.Response) {
  const id: string = req.params.id;

  res.send(`delete task here! ${id}`);
}
