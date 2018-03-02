// 初始化程序 引入全局方法 lodash 直接可以用 _. 调用
import filesystem from "./core/util/filesystem";
import Redis from "./core/redis/redis";
import logger from "./core/util/logUtil";
import lodash from "lodash";
const LOGGER = logger.getLogger(module.filename);
global.logUtil = logger;
global.filesystem = filesystem;
global._ = lodash;
global.CoreDir = __dirname;

// 初始化各种配置
module.exports = async function () {
	try {
		global.Path = {};

		// 加载properties文件
		// global.properties = filesystem.loadProperties('config.properties');

		// 注入util全局方法
		global.logUtil = require("./core/util/logUtil");
		global.filesystem = require("./core/util/filesystem");
		global.base64 = require("./core/util/base64");
		global.httpClient = require("./core/util/httpClient");
		global.random = require("./core/util/random");
		global.secret = require("./core/util/secret");
		global.timeUtil = require("./core/util/timeUtil");
		global.JSONObject = require("./core/util/JSONObject");
		global.pinyinUtil = require("./core/util/pinyinUtil");
		global.gatherupUtil = require("./core/util/gatherupUtil");
		global.checkUtil = require("./core/util/checkUtil");
		global.cacheUtil = require("./core/util/cacheUtil");
		// global.mailUtil = require("./core/util/mailUtil");
		global.jwtUtil = require("./core/util/jwtUtil");
		global.idGender = require("./core/util/idGender");
		global.sortUtil = require("./core/util/sortUtil");
		global.ipUtil = require("./core/util/ipUtil");
		global.stringUtil = require("./core/util/stringUtil");
		global.mathUtil = require("./core/util/mathUtil");

		// 注入nsq全局方法
		global.nsqService = require("./core/nsq/nsqService");
		global.nsqHandler = require("./core/nsq/nsqHandler");

		// 注入一些通用工具
		// global.alipaySDK = require("./thirdparty/alipay/alipaySDK");
		// global.wechatSDK = require("./thirdparty/wechat/wechatSDK");
		// global.easemobSDK = require("./thirdparty/easemob/easemobSDK");
		// require("./general/provinceCityService")();
		// require("./general/RSAService")();

		// redis
		//global.redis = Redis({host:'', port:'', password:''});

		// 加载url为全局变量
		global.URLCommand = require('./common/URLCommand');

		// 加载NSQTopic
		global.NSQTopic = require('./common/NSQTopic');

		// 加载所有错误码
		global.ErrorCode = require('./common/ErrorCode');

		// 全局redis key
		global.KeyFactory = require('./common/KeyFactory');

		// 全局redis NumKey
		global.NumKey = require('./common/NumKey');

		// 平台
		global.Platform = require('./common/Platform');


		// 定义本项目的session键
		global.sessionKey = 'GatherUp-CC';

		// 定义白名单名字
		global.whiteListItem = {
			noSign: 'noSign',
			noLogin: 'noLogin'
		};

		// 加载项目名到properties
		let arr = [];
		if (filesystem.isWindows()) {
			arr = AppDir.split('\\');
		} else {
			arr = AppDir.split('\/');
		}
		// global.properties["project.name"] = arr[arr.length - 1];

		// cookie路径
		// global.cookiePath = '/' + properties["project.name"].substring(properties["project.name"].indexOf('-') + 1);

		LOGGER.warn('node-core init...');
	} catch (e) {
		LOGGER.error(e);
		process.exit();
	}
};