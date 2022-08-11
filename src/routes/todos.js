const express = require("express");
const router = express.Router();

//import the controller
const Todo = require('../controllers/Todo');

router.get('/', async(req, res) => {
    let todos = await new Todo().getTodos();
});

router.post('/todo', async(req, res) => {
    let { title } = req.body;
    await new Todo().createTodo({ title }, res);
});

router.put('/todos/:todoId', async(req, res) => {
    let { todoId } = req.params;
    await new Todo().updateTodo(todoId, res);
    let todos = await new Todo().getTodos();
});

router.delete('/todos/:todoId', async(req, res) => {
    let { todoId } = req.params;
    await new Todo().deleteTodo(todoId);
    let todos = await new Todo().getTodos();
});

module.exports = router;