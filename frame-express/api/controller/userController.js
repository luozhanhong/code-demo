/**
 * 用户控制器
 */
const LOGGER = logUtil.getLogger(module.filename);
const DUser = requireT('DUser');
const userService = requireService('userService');
const UserBase = requireHttpBase("UserBase");
module.exports = {
	/**
	 * 用户详情
	 */
	info: {
		// url:'/user/info',
		// white: whiteListItem.noSign,
		method: "get",
		func: async function (req, res) {
			let user = new DUser();
			return user;
		}
	}
};