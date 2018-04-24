// 随机分组
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
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var k = 4;
console.log('c: ', RandomGroup(arr, k));

// N=[1,3,5,7,9,11,13,15] ,M=17 N1+N2+N3=M  [1,1,15],[1,3,13]
var sumNM = function (N, M) {
  let A = [];
  for (let i = 0; i < N.length; i++) {
    for (let j = i; j < N.length; j++) {
      for (let k = j; k < N.length; k++) {
        if (N[i] + N[j] + N[k] == M) {
          A.push([N[i], N[j], N[k]]);
        }
      }
    }
  }
  return A;
};