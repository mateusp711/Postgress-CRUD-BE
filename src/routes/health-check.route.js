const express = require('express');
const route = express.Router();

const authMiddleware = require('./../middlewares/auth.middleware');
const healthCheckController = require('../controllers/health-check.controller');

route.get('/health-check', [authMiddleware.authenticate, healthCheckController.healthCheck]);

module.exports = route;
