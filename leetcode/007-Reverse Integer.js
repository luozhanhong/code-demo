/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var res = 0;
	while (x != 0) {
		res = res * 10 + x % 10;
		x = parseInt(x / 10);
	}
	if (res > parseInt("0x7fffffff", 16) || res < parseInt("-0x80000000", 16)) return 0;
	return res;
};
console.log(reverse(321));