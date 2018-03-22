const bootstrap = Symbol('bootstrap');

// 初始化全局变量

module.exports = class {
  constructor() {
    require('./lib/globals');
    this[bootstrap]();
  }

  [bootstrap]() {

  }
};
