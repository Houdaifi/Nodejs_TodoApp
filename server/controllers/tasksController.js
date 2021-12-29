const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({createdAt:-1}) ;
        res.send(tasks);
    } catch (error) {
        res.send(error.message);
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.send(task);
    } catch (error) {
        res.send(error.message);
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.find({_id: "61c9a0b8bd685f7e9baf6238"});
        res.send(task);   
    } catch (error) {
        res.send(error.message);
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate({_id: req.body._id}, {$set: req.body});
        res.send(task);
    } catch (error) {
        res.send(error.message);
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete({_id: req.body._id});
        res.send(task);
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}