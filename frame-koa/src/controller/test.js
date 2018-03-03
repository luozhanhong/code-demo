const LOGGER = require('../utils/logUtil')(__filename);

module.exports = (ctx) => {
  ctx.response.body = 'test';
  LOGGER.info('test');
};
