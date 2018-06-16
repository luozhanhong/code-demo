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

async function promiseTest() {
  let p1 = function () {
    return new Promise(function (resoler, reject) {
      resoler('this is success');
    }).then(d => {
      return 'this is then 1 success';
    }).then(d => {
      console.log('then 2: ', d);
      return 'this is then 2 success';
    });
  };
  let p2 = function () {
    return new Promise(function (resoler, reject) {
      throw new Error('this is throw error');
      // reject(new Error('this is reject error'));
    }).then(d => {
      return 'this is then success';
    }).catch(err => {
      return err;
    });
  };

  console.log('p1:', await p1());
  console.log('p2:', await p2());
}
promiseTest();
// then 2:  this is then 1 success
// p1: this is then 2 success
// p2: Error: this is throw error
