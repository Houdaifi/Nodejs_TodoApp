const express = require('express');
const app = express();
const router = require('./router/tasks');
const connectDB = require('./db/connect');

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

try {
    connectDB(process.env.MONGO_TASKS_URI).then(() => {
        app.listen(3000, console.log("app listening on 3000"));
    });
} catch (error) {
    console.log(error);
}

app.use(express.json());

app.use('/api/tasks', router);