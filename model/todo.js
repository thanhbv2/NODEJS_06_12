const db = require('../config/db');

const Todo = db.model('Test', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number
  }
})


module.exports = Todo