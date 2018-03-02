const LOGGER = logUtil.getLogger(module.filename);

module.exports = function () {
	var messageHandler = new nsqHandler('topic', 'channel', false);
	messageHandler(async function (message) {
		LOGGER.warn('DemoNSQMessageHandler message: %s', message);
		/*
		let callback = funcs[message];
		if (_.isFunction(callback)) {
			callback();
		}
		*/
		return true;
	});
};
var funcs = {
	
};