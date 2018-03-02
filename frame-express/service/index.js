// service工程入口
import logger from '../frame-core/core/util/logUtil';
const LOGGER = logger.getLogger(module.filename);
global.ServiceDir = __dirname;

module.exports = async function () {
	try {
		global.Path.service = ServiceDir + '/service';

		// 注入Service全局方法
		global.requireService = function (fileName) {
			fileName = Path.service + '/' + fileName + '.js';
			if (!filesystem.exists(fileName)) {
				LOGGER.fatal('can not find %s', fileName);
				process.exit();
				return;
			}
			return require(fileName);
		};

		// 加载公共nsq处理
		/*
		var serviceNsqList = filesystem.ls(ServiceDir + '/nsq');
		for (let serviceNsq of serviceNsqList) {
			let file = ServiceDir + '/nsq/' + serviceNsq;
			LOGGER.warn("load nsq message handle : %s", file);
			require(file)();
		}
		*/
		
		// 加载项目nsq处理
		/*
		var projectNsqList = filesystem.ls(AppDir + '/nsq');
		for (let projectNsq of projectNsqList) {
			let file = AppDir + '/nsq/' + projectNsq;
			LOGGER.warn("load nsq message handle : %s", file);
			require(file)();
		}
		*/

		LOGGER.warn('frame-service init...');
	} catch (e) {
		LOGGER.error(e);
		process.exit();
	}
};