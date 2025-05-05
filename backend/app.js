const express = require('express');
const app = express();
const petRoutes = require('./routes/petRoutes')
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use('/api/',petRoutes)

module.exports=app;