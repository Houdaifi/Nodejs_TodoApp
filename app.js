const express = require('express');
const app = express();
const router = require('./router/tasks');

app.listen(3000);

app.use(express.json());

app.use('/api/tasks', router);