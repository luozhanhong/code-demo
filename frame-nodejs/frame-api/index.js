import routePromise from "../frame-core/core/server/routePromise";
import route from "../frame-core/core/server/route";
module.exports = async function () {
	// 引入core工程
	await require('../frame-core/index')();

	// 引入dao工程
	await require("../frame-dao/index")();

	// 引入service工程
	await require("../frame-service/index")();

	// 引入protocol工程
	await require("../node-protocol/index")();

	let http = require('../frame-core/core/server/httpServer');
	
	// url约定路由(控制器名+方法名)
	http.start(44001, routePromise());
	
	// url自定义路由
	//http.start(44001, route());
};