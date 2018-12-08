const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: { type: String, required: true, minLenght: 1, trim: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Number }
})

const newTodo = new Todo({ text: ' sss ' })

newTodo.save().then(result => console.log('===============>', result))

const other = new Todo({ text: ' new to do  ', completed: true, completedAt: 2000 })

other.save().then(result => console.log('===============>', result))