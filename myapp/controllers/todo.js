const express = require('express');
const Todo = require('../model/todo');
const router = express.Router();



router.get('/todos', async (req, res, next) => {

  const data = await Todo.find();
  res.json(data);
})


module.exports = router;