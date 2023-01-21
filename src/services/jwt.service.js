const jwt = require('jsonwebtoken');

const generate = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '24h' })
};

const validate = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generate,
  validate
}
