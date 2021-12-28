const express = require('express');
const app = express();
const router = require('./router/tasks');
const connectDB = require('./db/connect');

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });

try {
    connectDB(process.env.MONGO_TASKS_URI).then(() => {
        app.listen(8080, console.log("app listening on 8080"));
    });
} catch (error) {
    console.log(error);
}

app.use(express.json());

app.use('/api/tasks', router);