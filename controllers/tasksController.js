const getAllTasks = (req, res) => {
    res.send("ALL TASKS");
}

const createTask = (req, res) => {
    res.send("CREATED TASK");
}

const getTask = (req, res) => {
    res.send("GET ONE TASK");
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