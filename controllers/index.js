const express = require('express');
const todoRoute = require('./todo');
const router = express.Router();

router.use('/', todoRoute);

module.exports = router;
