module.exports = {
  // log4js配置
  log4js: {
    appenders: {
      logFile: {type: 'dateFile', filename: './logs/log.log', pattern: '.yyyy-MM-dd'},
      console: {type: 'console'}
    },
    categories: {
      default: {appenders: ['console', 'logFile'], level: 'all'}
    }
  }
}
