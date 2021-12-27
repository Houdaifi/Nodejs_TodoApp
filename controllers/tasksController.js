const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render( 'index', {tasks: tasks});    
    } catch (error) {
        res.send(error.message);
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        console.log(req.body);
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

const updateTask = (req, res) => {
    res.send("UPDATED TASK");
}

const deleteTask = (req, res) => {
    res.send("DELETED TASK");
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}