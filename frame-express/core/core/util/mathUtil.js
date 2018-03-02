const LOGGER = logUtil.getLogger(module.filename);
module.exports = {
	round: function (number, n) {
		if (!number || !_.isNumber(number) || !_.isInteger(n)) {
			throw new Error('mathUtil.round parameter error number: ' + number + ' ,n: ' + n);
		}
		n = _.toInteger(n);
		let pow = Math.pow(10, n);
		return Math.round(number * pow) / pow;
	}
};