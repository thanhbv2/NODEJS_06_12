const express = require('express');
const Todo = require('../model/todo');
const router = express.Router();



router.get('/todos', async (req, res, next) => {

  const data = await Todo.find();
  res.json({ result: data, httpCode: 200 });
})


router.post('/todos', async (req, res, next) => {
  try {
    if (req.body.text === '') {
      return res.status(400).json({ httpCode: 400, message: "Text k de trong" });
    }
    const data = await Todo.create(req.body)
    res.json({ result: data, httpCode: 200 })
  } catch (error) {
    // throw Error(error.message)
    next(error)
  }
})

module.exports = router;