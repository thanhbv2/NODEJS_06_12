const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const registerRoute = require('./controllers');
const app = express();






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", registerRoute)

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => console.log("server run port ", PORT));
