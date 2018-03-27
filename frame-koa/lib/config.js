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
    appenders: {
      logFile: {type: 'dateFile', filename: './logs/log.log', pattern: '.yyyy-MM-dd'},
      console: {type: 'console'}
    },
    categories: {
      default: {appenders: ['console', 'logFile'], level: (G.ENV === 'production' ? 'info' : 'all')}
    }
  }
}
