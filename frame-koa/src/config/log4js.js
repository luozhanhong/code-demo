// log4js配置文件
module.exports = (obj) => {
  return {
    appenders: {
      logFile: {type: 'dateFile', filename: './log/log.log', pattern: '.yyyy-MM-dd'},
      console: {type: 'console'}
    },
    categories: {
      [obj]: {appenders: ['console', 'logFile'], level: 'info'},
      default: {appenders: ['console', 'logFile'], level: 'info'}
    }
  };
};
