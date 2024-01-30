const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require("./config/dbConn");
require('dotenv').config();

const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/usersRoutes'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));