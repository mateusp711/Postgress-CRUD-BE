const express = require('express');
const route = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

route.post('/auth', [authMiddleware.validate, authController.authenticate]);

module.exports = route
