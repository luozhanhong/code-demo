const LOGGER = logUtil.getLogger(module.filename);

const commonService = requireService('commonService');

const userDao = requireDao("userDao");

const DUser = requireT("DUser");
module.exports = {
	/**
	 * 查询用户 By 用户id
	 * @param userId 用户id
	 */
	getUserById: async function (userId) {
		let userKey = KeyFactory.userKey(userId);
		let jsonString = await redis.STRINGS.get(userKey);
		let user = null;
		if (!jsonString) {
			user = await userDao.getUserById(userId);

			if (user) {
				// 回写redis
				jsonString = JSONObject.encodeT(user);
				redis.STRINGS.setex(KeyFactory.userKey(user.id), timeUtil.day2Second(30), jsonString);
			}
		} else {
			user = JSONObject.decodeT(jsonString, DUser);
		}
		if (!user) {
			return null;
		}
		
		return user;
	},
	/**
	 * 修改用户信息
	 * @param user 用户对象
	 */
	updateUser: async function (user) {
		let updaetSuccess = await userDao.updateUser(user);
		if (updaetSuccess) {
			let json = JSONObject.encodeT(user);
			redis.STRINGS.setex(KeyFactory.userKey(user.id), timeUtil.day2Second(30), json);
			redis.STRINGS.setex(KeyFactory.mobileKey(user.mobile), timeUtil.day2Second(30), json);
			if (user.creativeMan == 1) {
				redis.SORTSET.zadd(KeyFactory.userCreativeManListKey(), user.id, user.id);
			} else {
				redis.SORTSET.zrem(KeyFactory.userCreativeManListKey(), user.id);
			}
		}
		return updaetSuccess;
	},
	/**
	 * 创建用户
	 * @param name 用户名
	 */
	addUser: async function (name) {
		// 写入数据库
		let user = await userDao.addUser(name);
		let json = JSON.stringify(user);

		// 写入redis
		redis.STRINGS.setex(KeyFactory.userKey(user.id), timeUtil.day2Second(30), json);
		
		return user;
	}
};