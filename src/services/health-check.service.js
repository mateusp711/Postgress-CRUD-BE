const db = require('../database');

const healthCheck = async () => {
  try {
    await db.sequelize.authenticate();
  } catch (e) {
    throw new Error('Could not connect to database');
  }
};

module.exports = { healthCheck };
