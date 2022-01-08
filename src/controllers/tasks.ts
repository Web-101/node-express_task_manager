import express from "express";

// no query params
export function getAllTasks(req: express.Request, res: express.Response) {
  res.send("all tasks here!");
}

export function createTask(req: express.Request, res: express.Response) {  
  res.send("create task here!");
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
