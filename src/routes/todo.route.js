const express = require('express');
const route = express.Router();

const authMiddleware = require('./../middlewares/auth.middleware');
const todoMiddleware = require('./../middlewares/todo.middleware');
const todoController = require('./../controllers/todo.controller');

route.get('/todos', [authMiddleware.authenticate, todoController.listAll]);
route.post('/todos', [authMiddleware.authenticate, todoMiddleware.validate, todoController.create]);
route.patch('/todos/:id', [authMiddleware.authenticate, todoMiddleware.validate, todoController.update]);
route.delete('/todos/:id', [authMiddleware.authenticate, todoController.removeById]);

module.exports = route;
