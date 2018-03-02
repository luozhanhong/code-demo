/**
 * tengine拦截器，保证所有请求一定要通过tengine
 */
import logger from "../core/util/logUtil";
const LOGGER = logger.getLogger(module.filename);
module.exports.filter = async function (req, res, next) {
	// 逼着客户端一定要通过tengine服务器本系统
	try {
		if ('gu-server' !== req.headers['x-gatherup']) {
			LOGGER.warn("must request via tengine, url: %s,  %s", req.url, req);
			var json = {};
			json['time'] = timeUtil.now();
			json['status'] = parseInt(ErrorCode.systemError.unknowError.errorCode);
			json['errorMsg'] = ErrorCode.systemError.unknowError.errorMessage.toString();
			res.json(json);
		} else {
			next();
		}
	} catch (e) {
		res.sendStatus(500);
		LOGGER.error(e);
	}
};