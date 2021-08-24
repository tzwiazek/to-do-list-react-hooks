const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean
  }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;