// userDao

const DUser = requireT('DUser');

module.exports = {
	/**
	 * 查询用户 By 用户id
	 * @param userId 用户id
	 */
	getUserById: async function (userId) {
		return await dbService.queryT("SELECT * FROM `user` WHERE `id`=?", DUser, userId);
	},
	/**
	 * 创建用户
	 * @param name 用户名
	 */
	addUser: async function (name) {
		let user = new DUser();
		user.name = name;
		return await dbService.save(user);
	},
	/**
	 * 修改用户信息
	 * @param user 用户对象
	 */
	updateUser: async function (user) {
		return await dbService.updateT(user);
	}
};