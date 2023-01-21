const healthCheckService = require('../services/health-check.service');

const healthCheck = async (req, res) => {
  try {
    await healthCheckService.healthCheck();
    res.status(200).send({ status: 'ok' });
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
};

module.exports = { healthCheck };
