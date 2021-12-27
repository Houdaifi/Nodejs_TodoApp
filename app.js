const express = require('express');
const app = express();
const router = require('./router/tasks');
const connectDB = require('./db/connect');

require('dotenv').config();

try {
    connectDB(process.env.MONGO_TASKS_URI).then(() => {
        app.listen(3000, console.log("app listening on 3000"));
    });
} catch (error) {
    console.log(error);
}

// app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/api/tasks', router);