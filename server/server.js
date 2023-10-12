require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const setupDB = require('./db');
const keys = require('./config/keys');
const routes = require('./routes');
const logger = require('./utils/logger');

const { port } = keys;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(cors());

setupDB();
require('./config/passport')(app);
app.use(routes);

app.listen(port, () => {
  logger.info(
    `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
  );
});
