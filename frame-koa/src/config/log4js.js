// log4js配置文件
module.exports = {
  appenders: {
    logFile: {type: 'dateFile', filename: './logs/log.log', pattern: '.yyyy-MM-dd'},
    console: {type: 'console'}
  },
  categories: {
    default: {appenders: ['console', 'logFile'], level: 'all'}
  }
};
