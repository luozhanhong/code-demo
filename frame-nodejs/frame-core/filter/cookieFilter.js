/**
 * cookie拦截器
 */
import logger from "../core/util/logUtil";
const LOGGER = logger.getLogger(module.filename);
const distributedSessionService = requireService('distributedSessionService');
module.exports.filter = async function (req, res, next) {
	// 如果在白名单，不检查cookie
	try {
		var url = req.url.substring(0, req.url.indexOf('?'));
		url = !url ? req.url : url;
		if (whiteList.indexOf(url) <= -1 && !isStartsWith(url)) {
			var sessionId = parseInt(await distributedSessionService.get(req, res, sessionKey));
			if (!sessionId || sessionId <= 0) {
				LOGGER.warn('missing session, redirect to login!, url: %s', url);
				var json = {};
				json['time'] = timeUtil.now();
				json['status'] = parseInt(ErrorCode.systemError.noLoginError.errorCode);
				json['errorMsg'] = ErrorCode.systemError.noLoginError.errorMessage.toString();
				res.json(json);
			} else {
				next();
			}
		} else {
			next();
		}
	} catch (e) {
		res.sendStatus(500);
		LOGGER.error(e);
	}
};

function isStartsWith(url){
	for(let _url of startsWithWhiteList){
		return url.startsWith(_url);
	}
	return false;
}