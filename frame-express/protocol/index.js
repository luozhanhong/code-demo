// protocol工程入口
global.ProtocolDir = __dirname;
import logger from '../frame-core/core/util/logUtil';
const LOGGER = logger.getLogger(module.filename);

module.exports = async function () {
	try {
		global.Path.protocol = {};
		global.Path.protocol.msg = ProtocolDir + '/msg';
		global.Path.protocol.base = ProtocolDir + '/base';
		global.Path.protocol.httpRes = ProtocolDir + '/http/res';
		global.Path.protocol.httpReq = ProtocolDir + '/http/req';

		// 注入base全局方法
		global.requireHttpBase = function (fileName) {
			fileName = Path.protocol.base + '/' + fileName + '.js';
			if (!filesystem.exists(fileName)) {
				LOGGER.fatal('can not find %s', fileName);
				process.exit();
				return;
			}
			return require(fileName);
		};

		// 注入msg全局方法
		global.requireMsg = function (fileName) {
			fileName = Path.protocol.msg + '/' + fileName + '.js';
			if (!filesystem.exists(fileName)) {
				LOGGER.fatal('can not find %s', fileName);
				process.exit();
				return;
			}
			return require(fileName);
		};

		// 注入req全局方法
		global.requireHttpReq = function (fileName) {
			fileName = Path.protocol.httpReq + '/' + fileName + '.js';
			if (!filesystem.exists(fileName)) {
				LOGGER.fatal('can not find %s', fileName);
				process.exit();
				return;
			}
			return require(fileName);
		};

		// 注入res全局方法
		global.requireHttpRes = function (fileName) {
			fileName = Path.protocol.httpRes + '/' + fileName + '.js';
			if (!filesystem.exists(fileName)) {
				LOGGER.fatal('can not find %s', fileName);
				process.exit();
				return;
			}
			return require(fileName);
		};

		LOGGER.warn('node-protocol init...');
	} catch (e) {
		LOGGER.error(e);
		process.exit();
	}
};