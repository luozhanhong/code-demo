// redis类
import logger from "../util/logUtil";
import redis from "redis";
var LOGGER = logger.getLogger(module.filename);

/**
 * key不是字符串抛出错误
 * @param key
 */
function RedisKeyIsString(key) {
	if (!_.isString(key)) {
		throw new Error("redis key is not a String : " + key);
	}
	if (key.indexOf("undefined") >= 0 || key.indexOf("NaN") >= 0 || key.indexOf("null") >= 0) {
		throw new Error("redis key is a Error String : " + key);
	}
}

module.exports = function (config) {
	var client = redis.createClient(config);
	client.on("error", function (e) {
		LOGGER.error("redis Error : ", e);
	});
	LOGGER.warn('connect to redis %s:%s success!', config.host, config.port);
	return {
		KEYS: {
			/**
			 * exists
			 * @param key
			 */
			exists: function (key) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.exists(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * expire 设置键过期
			 * @param key
			 * @param seconds
			 */
			expire: function (key, seconds) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.expire(key, seconds, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * del 删除键
			 * @param key ...
			 */
			del: function (key) {
				client.del(key);
			}
		},
		STRINGS: {
			/**
			 * get
			 * @param key
			 */
			get: function (key) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.get(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * incrby
			 * @param key
			 * @param number
			 */
			incrby: function (key, number) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.incrby(key, number, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * incrbyfloat
			 * @param key
			 * @param number
			 */
			incrbyfloat: function (key, number) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.incrbyfloat(key, number, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * set
			 * @param key
			 * @param value
			 */
			set: function (key, value) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.set(key, value, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * setex
			 * @param key
			 * @param seconds
			 * @param value
			 */
			setex: function (key, seconds, value) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.setex(key, seconds, value, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * mget
			 * @param key
			 */
			mget: function (...key) {
				if (key.length == 1) {
					key = key[0];
				}
				return new Promise(function (resolve, reject) {
					key.forEach(function (k) {
						RedisKeyIsString(k);
					});
					client.mget(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * mset
			 * @param keysvalues(Map&lt;String,String&gt;())
			 */
			mset: function (keysvalues) {
				keysvalues.forEach(function (value, key) {
					RedisKeyIsString(key);
					client.set(key, value, function (err) {
						if (err) {
							LOGGER.error(err);
						}
					});
				});
			},
			/**
			 * msetex
			 * @param keysvalues(Map&lt;String,String&gt;())
			 * @param seconds
			 */
			msetex: function (keysvalues, seconds) {
				keysvalues.forEach(function (value, key) {
					RedisKeyIsString(key);
					client.setex(key, seconds, value, function (err) {
						if (err) {
							LOGGER.error(err);
						}
					});
				});
			}
		},
		SORTSET: {
			/**
			 * zscore
			 * @param key
			 * @param number
			 */
			zscore: function (key, number) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zscore(key, number, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zcard 返回有序集的元素个数
			 * @param key
			 */
			zcard: function (key) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zcard(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zadd
			 * @param key
			 * @param args = score,member,... / [score,member,...]
			 */
			zadd: function (key, ...args) {
				if (args.length == 1) {
					args = args[0];
				}
				if (_.indexOf(args, undefined) >= 0 || _.indexOf(args, NaN) >= 0 || _.indexOf(args, null) >= 0) {
					throw new Error("redis args is a Error, key :" + key + ", args :" + args);
				}
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zadd(key, args, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zrem 删除的成员
			 * @param key
			 * @param args = member,... / [member,...]
			 */
			zrem: function (key, ...args) {
				if (args.length == 1) {
					args = args[0];
				}
				if (_.indexOf(args, undefined) >= 0 || _.indexOf(args, NaN) >= 0 || _.indexOf(args, null) >= 0) {
					throw new Error("redis args is a Error, key :" + key + ", args :" + args);
				}
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zrem(key, args, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zrevrange 按score值递减(从大到小)来排列
			 * @param key
			 * @param start 开始索引
			 * @param stop 结束索引
			 */
			zrevrange: function (key, start, stop) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zrevrange(key, start, stop, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zrange 按score值递减(从小到大)来排列
			 * @param key
			 * @param start 开始索引
			 * @param stop 结束索引
			 */
			zrange: function (key, start, stop) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zrange(key, start, stop, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 返回有序集key中成员member的排名(从小到大)
			 * @param key
			 * @param member
			 */
			zrank: function (key, member) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zrank(key, member, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zrangebyscore 根据指定权重值从小到大返回元素
			 * @param key
			 * @param min 下限权重
			 * @param max 上限权重
			 * @param limit 返回条数限制
			 */
			zrangebyscore: function (key, min, max, limit) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zrangebyscore(key, min, max, 'LIMIT', 0, limit, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * zrevrangebyscore 根据指定权重值从大到小返回元素
			 * @param key
			 * @param max 上限权重
			 * @param min 下限权重
			 * @param limit 返回条数限制
			 */
			zrevrangebyscore: function (key, max, min, limit) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.zrevrangebyscore(key, max, min, 'LIMIT', 0, limit, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 计算给定的有序集合的并集，并且把结果放到destination中
			 * @param dstkey 目标key
			 * @param sets 原有的集合key
			 */
			zunionstore: function (dstkey, ...sets) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(dstkey);
					sets.unshift(sets.length);
					client.zunionstore(dstkey, sets, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			}
		},
		SETS: {
			/**
			 * 添加一个或者多个元素到集合(set)里
			 * @param key 键
			 * @param member
			 */
			sadd: function (key, ...member) {
				if (member.length == 1) {
					member = member[0];
				}
				if (_.indexOf(member, undefined) >= 0 || _.indexOf(member, NaN) >= 0 || _.indexOf(member, null) >= 0) {
					throw new Error("redis member is a Error, key :" + key + ", member :" + member);
				}
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.sadd(key, member, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 随机返回集合中的一个元素
			 * @param key
			 */
			srandmember: function (key) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.srandmember(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 删除集合中的一个元素
			 * @param key
			 * @param member 元素
			 */
			srem: function (key, ...member) {
				if (member.length == 1) {
					member = member[0];
				}
				if (_.indexOf(member, undefined) >= 0 || _.indexOf(member, NaN) >= 0 || _.indexOf(member, null) >= 0) {
					throw new Error("redis member is a Error, key :" + key + ", member :" + member);
				}
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.srem(key, member, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 获取集合里面的所有key
			 * @param key
			 */
			smembers: function (key) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.smembers(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			}
		},
		HASH: {
			/**
			 * 以Map的形式返回hash中的存储和值
			 * @param key
			 */
			hgetall: function (key) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.hgetall(key, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 添加对应关系，如果对应关系已存在，则覆盖
			 * @param key
			 * @param map
			 * */
			hmset: function (key, map) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					let args = [];
					for (let e of map.entries()) {
						args.push(e[0]);
						args.push(e[1]);
					}
					client.hmset(key, args, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			},
			/**
			 * 给hash某个field自增
			 * @param key 键
			 * @param field 存储位置
			 * @param value 要增加的值,可以是负数
			 */
			hincrbyfloat: function (key, field, value) {
				return new Promise(function (resolve, reject) {
					RedisKeyIsString(key);
					client.hincrbyfloat(key, field, value, function (err, reply) {
						if (err) {
							LOGGER.error(err);
							reject(err);
							return;
						}
						resolve(reply);
					});
				}).catch(function (error) {
					LOGGER.error(error);
				});
			}
		}
	};
};