// 日志工具
const log4js = require('log4js');
const log4config = require('../config/log4js');

log4js.configure(log4config);
const logger = log4js.getLogger('console');
console.log = logger.info.bind(logger);
console.error = logger.error.bind(logger);

module.exports = log4js;
