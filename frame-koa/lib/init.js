const assert = require('assert');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const koaBody = require('koa-body');
const convert = require('koa-convert');
const cors = require('koa-cors');
const helmet = require('koa-helmet');

const bootstrap = Symbol('bootstrap');

// 初始化全局变量

module.exports = class {
  constructor(options = {}) {
    assert(options.ROOT_PATH, 'options.ROOT_PATH must be set');
    // 初始化配置
    global.G = {};
    global.G.ROOT_PATH = options.ROOT_PATH;
    global.G.APP_PATH = path.join(options.ROOT_PATH, 'src');
    global.G.config = {...require('./config'), ...require(path.join(G.APP_PATH, 'config', `config.${options.ENV}`))};
    require('./globals');

    this.LOG = getLogger(__filename);

    this.LOG.info('global.G: ', G);

    this[bootstrap]();
  }

  run() {
    const app = new Koa();
    app.use(koaBody({multipart: true}));
    app.use(helmet());
    if (G.config.cors) {
      app.use(convert(cors()));
    }
    app.linsten(G.config.port, () => {
      this.LOG.info('server start on http://127.0.0.1:3000');
    });
  }

  [bootstrap]() {

  }
};
