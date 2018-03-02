const routePromise = require("../core/core/server/routePromise");
const route = require("../core/core/server/route");
module.exports = async function () {
  // // 注入全局项目配置
  global.projectConfig = require(AppDir + '/config.js');

  // 引入core工程
  await require('../core/index')();

  // 引入dao工程
  await require("../dao/index")();

  // 引入service工程
  await require("../service/index")();

  // 引入protocol工程
  await require("../protocol/index")();

  let http = require('../core/core/server/httpServer');

  // url约定路由(控制器名+方法名)
  http.start(projectConfig.port, routePromise());

  // url自定义路由
  //http.start(projectConfig.port, route());
};