// imports
import express from "express";
import taskModel from "../models/tasksModel";

// no query params
export function getAllTasks(_: express.Request, res: express.Response) {
  taskModel
    .find()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).json(err));
}

export function createTask(req: express.Request, res: express.Response) {
  taskModel
    .create(req.body)
    .then((task) => res.status(201).json(task))
    .catch((err) => res.status(400).json(err));
}

// query by id
export function getTask(req: express.Request, res: express.Response) {
  taskModel
    .findById(req.params.id)
    .then((task) => res.status(200).json(task))
    .catch((err) => res.status(400).json("Error: " + err));
}

export function updateTask(req: express.Request, res: express.Response) {
  const opt = { new: true, runValidators: true };

  taskModel
    .findByIdAndUpdate(req.params.id, req.body, opt)
    .then((task) => res.status(200).json(task))
    .catch((err) => res.status(400).json("Error: " + err));
}

export function deleteTask(req: express.Request, res: express.Response) {
  taskModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.status(400).json("Error: " + err));
}
