"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = exports.getAllTasks = void 0;
var tasksModel_1 = __importDefault(require("../models/tasksModel"));
// no query params
function getAllTasks(_, res) {
    tasksModel_1.default
        .find()
        .then(function (tasks) { return res.status(200).json(tasks); })
        .catch(function (err) { return res.status(400).json(err); });
}
exports.getAllTasks = getAllTasks;
function createTask(req, res) {
    tasksModel_1.default
        .create(req.body)
        .then(function (task) { return res.status(201).json(task); })
        .catch(function (err) { return res.status(400).json(err); });
}
exports.createTask = createTask;
// query by id
function getTask(req, res) {
    tasksModel_1.default
        .findById(req.params.id)
        .then(function (task) { return res.status(200).json(task); })
        .catch(function (err) { return res.status(400).json("Error: " + err); });
}
exports.getTask = getTask;
function updateTask(req, res) {
    var opt = { new: true, runValidators: true };
    tasksModel_1.default
        .findByIdAndUpdate(req.params.id, req.body, opt)
        .then(function (task) { return res.status(200).json(task); })
        .catch(function (err) { return res.status(400).json("Error: " + err); });
}
exports.updateTask = updateTask;
function deleteTask(req, res) {
    tasksModel_1.default
        .findByIdAndDelete(req.params.id)
        .then(function () { return res.status(200).json({ success: true }); })
        .catch(function (err) { return res.status(400).json("Error: " + err); });
}
exports.deleteTask = deleteTask;
