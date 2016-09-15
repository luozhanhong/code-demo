var Platform = function (platformId) {
	this.platformId = platformId;
};

module.exports = {
	/**
	 * 安卓(1)
	 */
	Android: new Platform(1),
	/**
	 * IOS(2)
	 */
	IOS: new Platform(2),
	/**
	 * IPAD(3)
	 */
	IPAD: new Platform(3),
	/**
	 * WEB(4)
	 */
	WEB: new Platform(4),
	/**
	 * PC(5)
	 */
	PC: new Platform(5)
};

let platformMap = new Map();
_.forEach(module.exports, function (v, k) {
	platformMap.set(_.toInteger(v.platformId), v);
});

/**
 * 根据传入的值返回Platform对象
 * @param value 值
 */
module.exports.valueOf = function (value) {
	return platformMap.get(_.toInteger(value));
};

