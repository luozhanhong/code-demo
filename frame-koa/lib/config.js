module.exports = {
  // 端口
  port: 3000,
  // 是否允许跨域
  cors: false,
  // 是否打印请求日志
  requestLog: true,
  // 中间件配置
  middleware: [
    'requsetStatus',
    'route'
  ],
  // log4js配置
  log4js: {
    pm2: true,
    replaceConsole: true,
    appenders: {
      logFile: {
        type: 'dateFile',
        filename: G.ROOT_PATH + '/logs/log.log',
        pattern: '.yyyy-MM-dd',
        // 始终加上日期结尾,防止rename时丢失
        alwaysIncludePattern: true
      },
      console: { type: 'console' }
    },
    categories: {
      default: {
        appenders: (G.ENV === 'production' ? ['logFile'] : ['console', 'logFile']),
        level: (G.ENV === 'production' ? 'info' : 'all')
      }
    }
  }
};
