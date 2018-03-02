module.exports = UserBase;
function UserBase(user) {
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
	 * 用户名
	 */
	this.name = user.name;
}