module.exports = {
	isEmail: function (email) {
		return /^[\w\-\.]+@([\w\-])+([\.][\-\w]+){1,2}$/.test(email);
	}
};