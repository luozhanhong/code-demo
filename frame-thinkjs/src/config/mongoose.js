const url = `mongodb://bingo:gogoing@127.0.0.1:27017/bingo`;
const _url = `mongodb://${url.substring(url.indexOf('@') + 1)}`;

const mongoose = require('mongoose');
const db = mongoose.createConnection(url);

const logger = think.logger;

db.on('error', (err) => {
  logger.error(err);
  process.exit(1);
});

db.on('disconnected', () => {
  logger.info(`Disconnected ${_url}`);
});

db.on('connected', () => {
  logger.info(`Connected ${_url}`);
});

db.on('reconnected', () => {
  logger.info(`Reconnected ${_url}`);
});

module.exports = db;
