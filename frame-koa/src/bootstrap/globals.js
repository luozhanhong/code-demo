const path = require('path');
const logger = require('../utils/logger');

global.getLogger = (filename = '') => {
  const channel = filename.replace(/.*src/, '').replace('.js', '').trim();
  return logger.getLogger(channel.substring(1).split(path.sep).filter(v => !!v).join('.'));
};
