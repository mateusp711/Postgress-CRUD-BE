const authRoutes = require('./auth.route');
const helthCheckRoutes = require('./health-check.route');
const todoRoutes = require('./todo.route');

module.exports = (app) => {
  app.use(authRoutes);
  app.use(helthCheckRoutes);
  app.use(todoRoutes);
};
