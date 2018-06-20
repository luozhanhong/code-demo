let obj = {};
let arr = [];
console.log(typeof  obj === 'object');// true
console.log(typeof  arr === 'object');// true
console.log(typeof  null === 'object');// true

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
//1 4 2
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
  let p3 = function () {
    return new Promise(function (resoler, reject) {
      throw new Error('this is throw error');
      // reject(new Error('this is reject error'));
    }).then(d => {
      return 'this is then success';
    });
  };
  let p4 = function () {
    return new Promise(function (resoler, reject) {
      // throw new Error('this is throw error');
      reject('this is reject error');
    }).then(d => {
      return 'this is then success';
    });
  };
  let p5 = function () {
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
  try {
    console.log('p3:', await p3());
  } catch (err) {
    console.log('p3 catch:', err);
  }
  try {
    console.log('p4:', await p4());
  } catch (err) {
    console.log('p4 catch:', err);
  }
  try {
    console.log('p5:', await p5());
  } catch (err) {
    console.log('p5 catch:', err);
  }
}
promiseTest();
// then 2:  this is then 1 success
// p1: this is then 2 success
// p2: Error: this is throw error
// p3 catch: Error: this is throw error
// p4 catch: this is reject error
// p5: Error: this is throw error
