import logger from "../util/logUtil";
import filesystem from "../util/filesystem";
import fs from "fs";
var LOGGER = logger.getLogger(module.filename);

/**
 * 扫描controller包，构建路由列表
 */
module.exports = function () {
	try {
		var path = AppDir + '/controller';
		var fileList = filesystem.ls(path);
		var route = {};
		var urlMap = {};//防止url重复

		// 定义白名单
		global.whiteList = {};

		fileList.forEach(function (item) {
			var file = path + "/" + item;
			var stats = fs.statSync(file);
			if (!stats.isDirectory()) {
				var controller = require(file);
				_.forEach(controller, function (v_map, k_funcName) {
					var funObj = v_map.func;
					if (_.isFunction(funObj)) {
						let url = "/" + item.replace("Controller.js", "") + funcNameToUrl(k_funcName);
						let method = v_map.method.toString().toLowerCase();

						//检查url不能为空
						if (!url) {
							process.exit();
						}
						if (urlMap[url] == url) {
							process.exit();
						}

						// 安按照定义加入白名单
						if (v_map.white) {
							global.whiteList[url] = v_map.white;
						}

						route[url] = v_map;
						urlMap[url] = url;
						LOGGER.info('request mapping url: [%s], method: [%s] on %s function %s()', url, method, file, k_funcName);
					}
				});
			}
		});

		// 输出白名单
		sortUtil.sortValue(whiteList).forEach(function (white) {
			LOGGER.info('url while list: [%s] => %s', white.key, white.value);
		});
		return route;
	} catch (e) {
		LOGGER.error(e);
		process.exit();
	}
};

/**
 * 方法名->链接(getById->/get/by/id)
 * @param funcName
 */
function funcNameToUrl(funcName) {
	var url = "/";
	var l = funcName.length;
	for (let i = 0; i < l; i++) {
		let c = funcName.charAt(i);
		if (i > 0 && c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
			url = url + "/";
			url = url + c;
		} else {
			url = url + c;
		}
	}
	return url.toLowerCase();
}