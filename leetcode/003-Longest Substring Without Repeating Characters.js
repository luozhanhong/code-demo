/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	var r = '';
	var l = 0;
	for (var i = 0; i < s.length; i++) {
		r = s.charAt(i);
		for (var j = i + 1; i < s.length; j++) {
			if (r.includes(s.charAt(j))) {
				break;
			}
			r = r + s.charAt(j);
		}
		if (r.length > l) {
			l = r.length;
		}
	}
	return l;
};
console.log(lengthOfLongestSubstring('pwwkew'));