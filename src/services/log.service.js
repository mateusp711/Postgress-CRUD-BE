const bunyan = require('bunyan');

const log = bunyan.createLogger({
  name: 'dev-training',
  level: bunyan.INFO
});

module.exports = log;
