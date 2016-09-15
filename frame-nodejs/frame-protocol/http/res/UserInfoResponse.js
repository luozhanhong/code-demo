module.exports = UserInfoResponse;
function UserInfoResponse(user) {
	if (!user.getClass) {
		throw new Error("t is not a pojo class");
	}
	if (user.getClass() != "DUser") {
		throw new Error("t is not a DUser");
	}
	/**
	 * 用户id
	 */
	this.userId = user.id;
	/**
	 * 用户昵称
	 */
	this.name = user.name;
}