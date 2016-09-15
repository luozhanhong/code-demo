const nsq = require('nsqubicle');
const LOGGER = logUtil.getLogger(module.filename);
module.exports = {
	/**
	 * 发送一条消息
	 * @param topic 消息topic
	 * @param message 消息体(json格式)
	 */
	produce: function (topic, message) {
		if (!topic || !message) {
			throw new Error("topic or message is Error!");
		}
		var queue = nsq({
			nsqd: [properties['nsq.nsqd'] + ':4150']
		});
		try {
			queue.push(topic, message);
		} catch (e) {
			LOGGER.warn('nsq produce error: %s', e);
		} finally {
			queue.close();
		}
	}
};