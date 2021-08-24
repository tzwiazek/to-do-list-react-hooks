const express = require('express');
const router = express.Router();

const ToDoListActions = require('../actions/api/toDoListActions');

router.get('/tasks', ToDoListActions.getAllTasks);
router.get('/tasks/:id', ToDoListActions.getTask);
router.post('/tasks', ToDoListActions.saveTask);
router.put('/tasks/:id', ToDoListActions.updateTask);
router.delete('/tasks/:id', ToDoListActions.removeTask);

module.exports = router;