const express = require('express');

const app = express();

const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);

module.exports = app;