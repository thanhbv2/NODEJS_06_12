const express = require('express');
const bodyParse = require('body-parser');
const db = require('./config/db');
const registerRoute = require('./controllers');
const app = express();






app.use(bodyParse.json());
app.use("/", registerRoute)

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => console.log("server run port ", PORT));
