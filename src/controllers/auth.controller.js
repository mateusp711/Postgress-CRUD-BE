const authService = require('../services/auth.service');

const authenticate = async (req, res) => {
  try {
    const result = await authService.authenticate(req.body);
    res.status(201).send({ token: result.token });
  } catch (e) {
    res.status(401).send({ status: 'error', message: e.message });
  }
};

module.exports = { authenticate };
