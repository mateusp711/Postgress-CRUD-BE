const validate = (req, res, next) => {
  if (!req.body || !req.body.name) {
    return res.status(400).send({ status: 'error', message: 'Body with name is missing' });
  }
  next();
}

module.exports = { validate };
