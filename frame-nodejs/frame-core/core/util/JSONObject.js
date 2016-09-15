var LOGGER = logUtil.getLogger(module.filename);
module.exports = {
	/**
	 * 从redis取的数据转成对象
	 * @param jsonString jsonString
	 * @param T 对象方法
	 * @returns t
	 */
	decodeT: function (jsonString, T) {
		var json = JSON.parse(jsonString);
		var t = new T();
		if (!t.getClass) {
			throw new Error("t is not a pojo class " + t);
		}
		var i = 0;
		_.forEach(json, function (v, k) {
			if (_.isUndefined(t[k])) {
				// 缓存有,程序没有的字段,忽略
				LOGGER.error("JSONObject.decodeT(jsonString, T) Error : " + t.getClass() + "." + k + "  is undefined");
				return;
			}
			// jsonString转成对象(兼容java存到redis的数据)
			if (_.isObjectLike(t[k]) && _.isString(json[k]) && json[k]) {
				t[k] = JSON.parse(json[k]);
			} else {
				t[k] = json[k];
			}
			i = i + 1;
		});
		if (i > 1) {
			return t;
		} else {
			// 除id(主键)外,所有字段匹配不成功,返回空
			return null;
		}
	},
	/**
	 * 对象转成jsonString保存到redis
	 * @param t 对象实体
	 * @returns jsonString
	 */
	encodeT: function (t) {
		if (!t.getClass) {
			throw new Error("t is not a pojo class " + t);
		}
		let r = _.clone(t);
		//delete r.getClass;
		//return JSON.stringify(r);
		//自动去除function类型
		_.forEach(r, function (value, k_field) {
			// 对象转成jsonString(兼容java从redis读数据)
			if (_.isArray(r[k_field])) {
				r[k_field] = JSON.stringify(t[k_field]);
			}
		});
		return JSON.stringify(r);
	}
};
