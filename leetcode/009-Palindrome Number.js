/**
 * 对称整数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var res = 0;
  var s = x;
  while (x != 0) {
    res = res * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return res == s;
};
console.log(isPalindrome(-11));
console.log(isPalindrome(10));
console.log(isPalindrome(11));
console.log(isPalindrome(12321));;
console.log('');
var isPalindrome_str = function (x) {
  if (x < 0) {
    return false;
  }
  return parseInt(x.toString().split('').reverse().join('')) == x;
};
console.log(isPalindrome_str(-11));
console.log(isPalindrome_str(10));
console.log(isPalindrome_str(11));
console.log(isPalindrome_str(12321));