// 日志工具
const log4js = require('log4js');

log4js.configure(G.config.log4js);
const logger = log4js.getLogger('console');
console.log = logger.info.bind(logger);
console.error = logger.error.bind(logger);

module.exports = log4js;
