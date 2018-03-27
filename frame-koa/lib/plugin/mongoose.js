const mongooseMap = new Map();

if (mongooseMap.size === 0 && G.config.mongoose) {
  const LOGGER = getLogger(__filename);
  const mongoose = require('mongoose');
  mongoose.set('debug', G.config.mongoose.debug);

  const createConnection = (mongodb) => {
    const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.host}:27017/${mongodb.database}`;
    const _url = `mongodb://${mongodb.host}:27017/${mongodb.database}`;

    const db = mongoose.createConnection(url, mongodb.options);

    db.on('error', (err) => {
      LOGGER.error(err);
      process.exit(1);
    });

    db.on('disconnected', () => {
      LOGGER.info(`Disconnected ${_url}`);
    });

    db.on('connected', () => {
      LOGGER.info(`Connected ${_url}`);
    });

    db.on('reconnected', () => {
      LOGGER.info(`Reconnected ${_url}`);
    });
  };

  Array.isArray(G.config.mongoose) ? G.config.mongoose.filter((mongodb) => {
    mongooseMap.set(mongodb.database, createConnection(mongodb));
  }) : mongooseMap.set(G.config.mongoose.database, createConnection(G.config.mongoose));
}
module.exports = mongooseMap;
