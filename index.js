require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./src/database');
const logService = require('./src/services/log.service');
const routes = require('./src/routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes(app);

app.listen(process.env.PORT, async () => {
  await db.sequelize.sync();
  logService.info(`Server is running on port ${process.env.PORT}`);
});
