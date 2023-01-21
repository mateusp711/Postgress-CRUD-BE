const { Sequelize } = require('sequelize');
const logService = require('./services/log.service');

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: logService.debug.bind(logService)
});

const todo = require('./models/todo.model');

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = todo(sequelize, Sequelize);

module.exports = db;
