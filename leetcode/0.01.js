let obj = {};
let arr = [];
console.log(typeof  obj === 'object');
console.log(typeof  arr === 'object');
console.log(typeof  null === 'object');

console.log(1);
new Promise(function (resoler, reject) {
  resoler(true);
  setTimeout(() => {
    reject(false)
  }, 0);
}).then((d) => {
  console.log(2);
}).catch((e) => {
  console.log(3);
});
console.log(4);