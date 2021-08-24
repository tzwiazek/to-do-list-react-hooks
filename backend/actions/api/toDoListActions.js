const Task = require('../../db/models/task');

class ToDoListActions {
  async getAllTasks(req, res) {
    const doc = await Task.find({});

    res.status(200).json(doc);
  }

  async getTask(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id});

    res.status(200).json(task);
  }

  async saveTask(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    const isCompleted = req.body.isCompleted || false;

    let newTask;
    try {
      newTask = Task({ title, body, isCompleted });
      await newTask.save();
    } catch (err) {
      return res.status(422).json('title or description is empty');
    }

    res.status(200).json(newTask);
  }

  async updateTask(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;
    const isCompleted = req.body.isCompleted;

    let task;
    try {
      task = await Task.findOne({ _id: id })
      task.title = title;
      task.body = body;
      task.isCompleted = isCompleted;
      await task.save();

      res.status(201).json(task);
    } catch (err) {
      return res.status(422).json('title or description is empty');
    }
  }

  async removeTask(req, res) {
    const id = req.params.id;
    await Task.deleteOne({ _id: id });

    res.sendStatus(204);
  }
}

module.exports = new ToDoListActions();