const Task = require('../models/Task'); 
const asyncWrapper = require('../middleware/asyncWrapper');
const { createCustomError } = require('../errors/custom-error');

// Get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

// Create a task
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

// Get a single task
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 400));
    }
    res.status(200).json({ task });
});

// Update a task
const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 400));
    }
    res.status(200).json({ task });
});

// Delete a task
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 400));
    }
    res.status(200).json({ msg: 'Task deleted' });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
