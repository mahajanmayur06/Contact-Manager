const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3500;

app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => console.log(`Server running on ${port}`));