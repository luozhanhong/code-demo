module.exports = MessageNSQ;

function MessageNSQ() {
	/**
	 * 消息接收者类型
	 */
	this.massageReceiver = 0;
	/**
	 * 消息类型
	 */
	this.messageSign = 0;
	/**
	 * 消息接收者id
	 */
	this.receiverId = 0;
	/**
	 * 消息发送者id
	 */
	this.senderId = 0;
	/**
	 * 消息发送时间
	 */
	this.createTime = 0;
	/**
	 * 消息体内容(json格式)
	 */
	this.body = '';
}