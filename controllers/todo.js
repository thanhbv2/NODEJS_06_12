const express = require('express');
const Todo = require('../model/todo');
const router = express.Router();



router.get('/todos', async (req, res, next) => {

  const data = await Todo.find();
  res.json(data);
})


router.post('/todos', async (req, res, next) => {
  console.log('===============>', req.body);
  const data = await Todo.create(req.body)
  res.json(data)
})

module.exports = router;