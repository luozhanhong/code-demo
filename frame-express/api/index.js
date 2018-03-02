import routePromise from "../frame-core/core/server/routePromise";
import route from "../frame-core/core/server/route";
module.exports = async function () {
	// // 注入全局项目配置
	global.projectConfig = require(AppDir + '/config.js');

	// 引入core工程
	await require('../frame-core/index')();

	// 引入dao工程
	await require("../frame-dao/index")();

	// 引入service工程
	await require("../frame-service/index")();

	// 引入protocol工程
	await require("../frame-protocol/index")();

	let http = require('../frame-core/core/server/httpServer');
	
	// url约定路由(控制器名+方法名)
	http.start(projectConfig.port, routePromise());
	
	// url自定义路由
	//http.start(projectConfig.port, route());
};