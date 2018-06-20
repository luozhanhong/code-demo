/**
 * Z字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // numRows == 1 特殊情况
  if (numRows == 1) {
    return s;
  }

  var indexStr = [];
  for (let i = 0; i < numRows; i++) {
    indexStr.push([]);
  }
  var index = [];
  var addOrSub = 1;
  // 行/列
  var row = -1, col = 0;
  index.push([row, col]);
  for (let i = 0; i < s.length; i++) {
    addOrSub == 1 && row++;

    addOrSub == -1 && row--;
    addOrSub == -1 && col++;

    index.push([row, col]);
    indexStr[row].push(s[i]);

    if (row == 0) {
      addOrSub = 1
    }
    if (row == numRows - 1) {
      addOrSub = -1
    }
  }
  return [].concat(...indexStr).join('');
};
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));