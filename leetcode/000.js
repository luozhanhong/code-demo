var RandomGroup = function (a, k) {
  let l = a.length / k;
  let n = a.length % k;
  let b = [];
  let c = [];
  console.log('a: ', a);
  for (let i = a.length; i > 0; i--) {
    b.push(a.splice(Math.floor(Math.random() * i), 1)[0]);
  }
  console.log('b: ', b);
  for (let i = 0; i < k; i++) {
    c.push(b.splice(0, l))
  }
  for (let i = 0; i < n; i++) {
    c[i].push(b.splice(0, 1)[0]);
  }
  console.log('a: ', a);
  console.log('b: ', b);
  return c;
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var k = 4;
console.log('c: ', RandomGroup(arr, k));