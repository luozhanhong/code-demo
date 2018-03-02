const LOGGER = logUtil.getLogger(module.filename);
module.exports = {
	/**
	 * multiGetT
	 * @param idSet id集合(Set&lt;String/Numbe&gt;())
	 * @param T 对象方法
	 * @returns {Map.<Number,t>} Map&lt;Number,T&gt;()
	 */
	multiGetT: async function (idSet, T) {
		idSet.delete("-1");
		idSet.delete(-1);
		idSet.delete("0");
		idSet.delete(0);
		idSet.delete("");
		idSet.delete(null);
		idSet.delete(undefined);
		idSet.delete(NaN);
		if (idSet.size == 0) {
			return new Map();
		}
		let t = new T();
		var clazz = t.getClass();
		if (!Key[clazz]) {
			throw new Error("commonService.multiGetT Key is not find, clazz : " + clazz);
		}
		// 用哪个数据库的dbService
		var dbService = Key[clazz].dbService;
		// 获取redisKey
		var redisKey = Key[clazz].redisKey;
		// 获取sqlKey
		var sqlKey = Key[clazz].sqlKey;

		// 首先去缓存拿
		var data = new Map();
		var redisKeyList = [];
		idSet.forEach(function (id) {
			redisKeyList.push(redisKey + id);
			data.set(_.toNumber(id), null);
		});
		var byteList = await redis.STRINGS.mget(redisKeyList);

		// 判断哪些缓存是有的，哪些是缓存没有的
		if (byteList.length > 0) {
			byteList.forEach(function (byte) {
				if (!byte) {
					return;
				}
				let t = JSONObject.decodeT(byte, T);
				data.set(t[sqlKey], t);
			});
		}

		// 找出缓存没有的
		var tmpUserIdSet = new Set();
		data.forEach(function (v, k) {
			if (!v) {
				tmpUserIdSet.add(k);
			}
		});
		if (tmpUserIdSet.size == 0) {
			return data;
		}

		// 缓存丢失的，去数据库查找
		var tList = await dbService.multiGetT(tmpUserIdSet, T, sqlKey);
		if (tList.length == 0) {
			// 如果数据库都没有，那就直接返回
			return data;
		}

		// 如果数据库查到就回写到缓存
		var keysValuesMap = new Map();
		tList.forEach(function (t) {
			if (_.isString(t[sqlKey]) && t[sqlKey].trim() == "") {
				LOGGER.error(clazz + "." + sqlKey + "  is ''");
			}
			if (t[sqlKey] == 0 || t[sqlKey] == null || t[sqlKey] == undefined) {
				LOGGER.error(clazz + "." + sqlKey + "  is undefined/null/0");
				return;
			}
			data.set(t[sqlKey], t);
			keysValuesMap.set(redisKey + t[sqlKey], JSONObject.encodeT(t));
		});
		redis.STRINGS.msetex(keysValuesMap, timeUtil.day2Second(30));
		return data;
	},
	/**
	 * SortSet列表加占位
	 * @param key
	 */
	addSortSetAnchor: function (key) {
		redis.SORTSET.zadd(key, -1, "-1");
	},
	/**
	 * 获取统计字段的值
	 * @param numKey
	 * @param id
	 */
	getNumColumn: async function (numKey, id) {
		if (!_.isNumber(id) || !id) {
			throw new Error("id is undefined or NaN");
		}
		var countStr = await redis.STRINGS.get(numKey.getKey(id));
		if (countStr != null) {
			return _.toNumber(countStr);
		}
		var count = 0;
		var sql = "SELECT `" + numKey.column + "` FROM `" + numKey.table + "` WHERE `" + numKey.pk + "`=?";
		var list = await guSlaveDbService.query(sql, id);
		if (_.size(list) > 0) {
			count = list[0][numKey.column];
		}
		setNumColumn(numKey, id, count);
		return count;
	},
	/**
	 * updateNumColumn
	 * @param numKey
	 * @param id
	 * @param num
	 */
	updateNumColumn: async function (numKey, id, num) {
		if (!_.isNumber(id) || !id) {
			throw new Error("id is undefined or NaN");
		}
		if (num == 0) {
			return -1;
		}
		await this.getNumColumn(numKey, id);
		var sql = "UPDATE `" + numKey.table + "` SET `" + numKey.column + "`=`" + numKey.column + "`+? WHERE `" + numKey.pk + "`=?";
		var boolean = await guSlaveDbService.update(sql, num, id);
		if (boolean) {
			return redis.STRINGS.incrbyfloat(numKey.getKey(id), num);
		}
		return -1;
	},
	/**
	 * 重置计数
	 * @param numKey
	 * @param id
	 * @param num
	 */
	resetNumColumn: async function (numKey, id, num) {
		if (!_.isNumber(id) || !id) {
			throw new Error("id is undefined or NaN");
		}
		if (num == 0) {
			return -1;
		}
		await this.getNumColumn(numKey, id);
		var sql = "UPDATE `" + numKey.table + "` SET `" + numKey.column + "`=? WHERE `" + numKey.pk + "`=?";
		var boolean = await guSlaveDbService.update(sql, num, id);
		if (boolean) {
			return redis.STRINGS.set(numKey.getKey(id), num);
		}
		return -1;
	},
	/**
	 * 批量获取统计字段的值(不同字段同id同table)
	 * @param id
	 * @param numKeys
	 * @returns {Map<{Numkey,Number}>} Map&lt;Numkey,Number&gt;()
	 */
	multiGetNumColumn_OneId: async function (id, ...numKeys) {
		let map = await this.multiGetNumColumn(new Set([id]), ...numKeys);
		return map.get(_.toNumber(id));
	},
	/**
	 * 批量获取统计字段的值(不同字段不同id同table)
	 * @param idSet id集合(Set&lt;String/Numbe&gt;())
	 * @param numKeys numKey枚举集合
	 * @returns {Map<id,Map<{Numkey,Number}>>} Map&lt;id,Map&lt;Numkey,Number&gt;&gt;()
	 */
	multiGetNumColumn: async function (idSet, ...numKeys) {
		idSet.delete("-1");
		idSet.delete(-1);
		idSet.delete("0");
		idSet.delete(0);
		idSet.delete("");
		idSet.delete(null);
		idSet.delete(undefined);
		if (idSet.size == 0) {
			return new Map();
		}

		// 组成key
		var keyList = [];
		var data = new Map();
		idSet.forEach(function (id) {
			numKeys.forEach(function (numKey) {
				let numKeyMap = data.get(_.toNumber(id));
				if (!numKeyMap) {
					numKeyMap = new Map();
				}
				keyList.push(numKey.getKey(id));
				numKeyMap.set(numKey, null);
				data.set(_.toNumber(id), numKeyMap);
			});
		});

		var jsonStringList = await redis.STRINGS.mget(keyList);
		// 找出缓存没有的id
		var tmpIdSet = new Set();
		// 判断哪些缓存是有的，哪些是缓存没有的
		if (jsonStringList.length > 0) {
			var i = 0;
			data.forEach(function (v_numKeyMap, k_id) {
				v_numKeyMap.forEach(function (v, k_numKey) {
					let jsonString = jsonStringList[i];
					i = i + 1;
					if (!jsonString) {
						tmpIdSet.add(k_id);
						return;
					}
					v_numKeyMap.set(k_numKey, jsonString);
					data.set(k_id, v_numKeyMap)
				});
			});
		}
		if (tmpIdSet.size == 0) {
			return data;
		}

		let dataMapFromDB = await guSlaveDbService.multiGetNumColumn(tmpIdSet, numKeys);

		if (dataMapFromDB.size == 0) {
			// 如果数据库都没有，那就直接返回
			return data;
		}

		let keysValuesMap = new Map();
		let keysValuesMap_30 = new Map();
		dataMapFromDB.forEach(function (v_map, k_id) {
			data.set(k_id, v_map);
			v_map.forEach(function (v_number, k_numkey) {
				if (k_numkey.seconds > 0) {
					keysValuesMap_30.set(k_numkey.getKey(k_id), v_number);
				} else {
					keysValuesMap.set(k_numkey.getKey(k_id), v_number);
				}
			});
		});

		// 批量写入redis
		redis.STRINGS.msetex(keysValuesMap_30, timeUtil.day2Second(30));
		redis.STRINGS.mset(keysValuesMap);

		return data;
	}
};

/**
 * setNumColumn
 * @param numKey
 * @param id
 * @param num
 */
function setNumColumn(numKey, id, num) {
	if (!_.isNumber(id) || !id) {
		throw new Error("id is undefined or NaN");
	}
	if (numKey.seconds > 0) {
		redis.STRINGS.setex(numKey.getKey(id), numKey.seconds, num);
	} else {
		redis.STRINGS.set(numKey.getKey(id), num);
	}
}