const assert = require('assert');
const path = require('path');
const http = require('http');
const fs = require('fs');
const Koa = require('koa');
const koaBody = require('koa-body');
const convert = require('koa-convert');
const cors = require('koa-cors');
const helmet = require('koa-helmet');

const bootstrap = Symbol('bootstrap');

module.exports = class {
  constructor(options = {}) {
    assert(options.ROOT_PATH, 'options.ROOT_PATH must be set');
    // 初始化配置
    global.G = {};
    global.G.ENV = options.ENV;
    global.G.ROOT_PATH = options.ROOT_PATH;
    global.G.APP_PATH = path.join(options.ROOT_PATH, 'src');
    global.G.config = Object.assign({}, require('./config'), require(path.join(G.APP_PATH, 'config', `config`)), require(path.join(G.APP_PATH, 'config', `config.${options.ENV}`)));
    require('./globals');

    this.LOGGER = getLogger(__filename);
    this.LOGGER.debug('global.G: ', G);

    this[bootstrap]();
  }

  run() {
    const app = new Koa();
    app.use(koaBody({multipart: true}));
    app.use(helmet());
    G.config.cors && app.use(convert(cors()));

    // 先注册自定义中间件
    G.config.middleware && G.config.middleware.forEach(m => {
      const mPath = path.join(G.ROOT_PATH, 'src', 'middleware', `${m}.js`);
      fs.existsSync(mPath) && app.use(require(mPath)(G.config[m]));
    });

    // 再注册框架中间件
    const middlewareList = fs.readdirSync(path.join(G.ROOT_PATH, 'lib', 'middleware'));
    middlewareList.forEach(m => {
      app.use(require(path.join(G.ROOT_PATH, 'lib', 'middleware', m))());
    });

    // global exception catch
    process.on('uncaughtException', (err) => {
      LOGGER.error(err);
    });
	/** kill -15,完成请求,优雅退出,关于进程结束相关信号可自行搜索查看 */
	process.on('SIGTERM', close.bind(this, 'SIGTERM'));
	process.on('SIGINT', close.bind(this, 'SIGINT'));

	function close(signal) {
		console.log(`收到 ${signal} 信号开始处理`);

		server.close(() => {
			console.log(`服务停止 ${signal} 处理完毕`);
			process.exit(0);
		});
	}
	/** Docker下要用node启动 https://cloud.tencent.com/developer/article/1519301*/
	
    // start
    const server = http.createServer(app.callback());
    server.listen(G.config.port);
    this.LOGGER.info(`server start on http://127.0.0.1:${G.config.port}`);
    // app.listen(G.config.port, () => {
    //   this.LOGGER.info(`server start on http://127.0.0.1:${G.config.port}`);
    // });
  }

  [bootstrap]() {

  }
};
