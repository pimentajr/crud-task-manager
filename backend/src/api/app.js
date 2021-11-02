const express = require('express');

const app = express();

const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const tasksRoutes = require('./routes/tasksRoutes');

app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/tasks', tasksRoutes);

module.exports = app;