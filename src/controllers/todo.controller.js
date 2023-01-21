const todoService = require('./../services/todo.service');

const listAll = async (req, res) => {
  try {
    const list = await todoService.listAll();
    res.status(200).send(list);
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
};

const create = async (req, res) => {
  try {
    const result = await todoService.create(req.body);
    res.status(201).send({ id: result.id });
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
};

const update = async (req, res) => {
  try {
    req.body.id = req.params.id;
    await todoService.update(req.body);
    res.status(204).send();
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
};

const removeById = async (req, res) => {
  try {
    await todoService.removeById(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
};

module.exports = {
  listAll,
  create,
  update,
  removeById
};
