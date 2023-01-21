const jwtService = require('../services/jwt.service');

const validate = (req, res, next) => {
  if (req.body && req.body.username && req.body.password) {
    return next();
  }
  res.status(400).send({ status: 'error', message: 'Body with username and/or password is missing' });
};

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    jwtService.validate(token);
    next();
  } catch (error) {
    return res.status(401).send({ status: 'error', message: 'Unauthorized' });
  }
};


module.exports = {
  validate,
  authenticate
};
