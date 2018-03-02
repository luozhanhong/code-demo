/**
 * cookie拦截器
 */
import logger from "../core/util/logUtil";
const LOGGER = logger.getLogger(module.filename);
module.exports.filter = async function (req, res, next) {
	LOGGER.warn('demoFilter is use...');
	next();
};