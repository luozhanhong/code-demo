module.exports = {
	ip2Long: function (strip) {
		let ipArr = strip.split(".");
		return (_.toNumber(ipArr[0]) << 24) + (_.toNumber(ipArr[1]) << 16) + (_.toNumber(ipArr[2]) << 8) + _.toNumber(ipArr[3]);
	}
};