/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = (j - i) * (height[i] > height[j] ? height[j] : height[i]);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};
console.log(maxArea([1, 2]));