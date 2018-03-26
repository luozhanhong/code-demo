module.exports = {
  // 端口
  port: 44001,
  // 是否允许跨域
  cors: false,
  // 中间件配置
  middleware: [
    'requsetStatus',
    'route'
  ],
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
