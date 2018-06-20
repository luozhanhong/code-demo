/**
 * 最长对称子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var n = 0, l = 0;
  var extendPalindrome = function (s, b, e) {
    while (s.charAt(b) === s.charAt(e) && b >= 0 && e <= s.length) {
      if (e - b + 1 > l) {
        n = b;
        l = e - b + 1;
      }
      b--;
      e++;
    }
  };
  for (var i = 0; i < s.length; i++) {
    extendPalindrome(s, i, i);
    extendPalindrome(s, i, i + 1);
  }
  return s.substr(n, l);
};
console.log(longestPalindrome('a'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));