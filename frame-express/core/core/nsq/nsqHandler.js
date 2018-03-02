const nsq = require('./nsqUtil');
const LOGGER = logUtil.getLogger(module.filename);
let getChannel = function (channel, isOnlyChannel) {
	if (isOnlyChannel) {
		return channel;
	} else {
		let project = properties["project.name"].split('-')[1];
		return project + '_' + filesystem.getValidIPAddress() + '_' + properties['http.' + project + '.port'];
	}
};
module.exports = nsqHandler;
function nsqHandler(topic, channel, isOnlyChannel) {
	if (!topic || !channel) {
		throw new Error("topic or channel is Error!");
	}
	LOGGER.warn("find nsq callback, bind channel: " + getChannel(channel, isOnlyChannel));
	return function (func) {
		let queue = nsq({
			nsqd: [properties['nsq.nsqd'] + ':4150'],
			channel: getChannel(channel, isOnlyChannel)
		});
		queue.pull(topic, async function (message, callback) {
			LOGGER.warn('nsq handle message: %s', message);
			try {
				let finish = await new func(message);
				if (finish === true) {
					callback(false);
				} else {
					callback(true);
				}
			} catch (e) {
				LOGGER.error('nsq handle error: %s', e);
				callback(e);
			}
		});
	};
}