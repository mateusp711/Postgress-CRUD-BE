const db = require('../database');
const logService = require('../services/log.service');

const create = async (data) => {
  try {
    const todo = await db.Todo.create(data);
    return todo.dataValues;
  } catch (e) {
    handleError(e);
  }
};

const update = async (data) => {
  try {
    const todo = await db.Todo.update(data, {
      where: {
        id: data.id
      }
    });
    return todo.dataValues;
  } catch (e) {
    handleError(e);
  }
};

const listAll = async () => {
  try {
    const list = await db.Todo.findAll();
    return list;
  } catch (e) {
    handleError(e);
  }
};

const removeById = async (id) => {
  try {
    await db.Todo.destroy({
      where: {
        id
      }
    });
  } catch (e) {
    handleError(e);
  }
};

const handleError = (error) => {
  switch (error.name) {
    case 'SequelizeUniqueConstraintError':
      throw new Error('Name must be unique');
    case 'SequelizeConnectionError':
      logService.error(error);
      throw new Error('Database connection error');
    default:
      logService.error(error);
      throw new Error('We could not perform this action');
  }
}

module.exports = {
  create,
  update,
  listAll,
  removeById
};
