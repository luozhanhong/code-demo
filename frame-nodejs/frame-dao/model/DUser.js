module.exports = DUser;
function DUser() {
	/**
	 * 不知道怎么拿对象名称，只能用这个方法代替
	 */
	this.getClass = function () {
		return "DUser";
	};
	/**
	 * 用户id
	 */
	this.id = 0;
	/**
	 * 用户名
	 */
	this.name = "";
}