const mongoose = require('mongoose');

const { database } = require('../config/keys');
const logger = require('../utils/logger');

const setupDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  try {
    mongoose
      .connect(database.url, options)
      .then(() => {
        logger.info('MongoDB is connected');
      })
      .catch(err => {
        logger.error(`MongoDB connection unsuccessful. Error: ${err.message}`);
      });
  } catch (error) {
    return null;
  }
};

module.exports = setupDB;
