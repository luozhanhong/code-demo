import NodeCache from "node-cache";
var nodeCache = new NodeCache({checkperiod: 3600});//一小时gc一次
const LOGGER = logUtil.getLogger(module.filename);

module.exports = {
	/**
	 * 获取缓存,没有时自动回写
	 * @param key
	 * @param ttl 过期时间,单位秒
	 * @param callback 获取数据的方法
	 * @param data callback方法需要的参数
	 */
	get: async function (key, ttl, callback, ...data) {
		return new Promise(function (resolve, reject) {
			if (!_.isFunction(callback)) {
				throw new Error("callback is not a function ,key: %s", key);
			}
			nodeCache.get(key, async function (err, value) {
				if (!err) {
					if (value == undefined) {
						value = await callback(...data);
						if (!_.isNumber(ttl)) {
							reject(new Error("ttl is not a number ,ttl: %s", ttl));
						}
						nodeCache.set(key, value, ttl, function (err, success) {
							if (!err && success) {
								LOGGER.warn('NodeCache init, key: %s ,ttl: %s', key, ttl);
							} else {
								reject(err);
							}
						});
						resolve(value);
					} else {
						resolve(value);
					}
				} else {
					reject(err);
				}
			});
		}).catch(function (error) {
			LOGGER.error(error);
		});
	},
	/**
	 * 保存缓存
	 * @param key
	 * @param ttl 过期时间,单位秒
	 * @param value 数据对象
	 */
	set: function (key, ttl, value) {
		nodeCache.set(key, value, ttl, function (err, success) {
			if (!err && success) {
				LOGGER.warn('NodeCache set success, key: %s ,ttl: %s s', key, ttl);
			} else {
				LOGGER.error(new Error('NodeCache set error: %s ,key: %s ,ttl: %s s', err, key, ttl));
			}
		});
	},
	/**
	 * 删除缓存
	 * @param key
	 */
	del: function (key) {
		nodeCache.del(key, function (err, count) {
			if (!err) {
				LOGGER.warn('node-cache del success, key: %s ,count: %s', key, count);
			}
		});
	}
};