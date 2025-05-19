// 定义三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.status = PENDING; // 初始化状态
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的原因
    this.onFulfilledCallbacks = []; // 成功的回调
    this.onRejectedCallbacks = []; // 失败的回调

    // 定义resolve函数
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback());
      }
    }
    // 定义reject函数
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback());
      }
    }

    try {
      // 立即执行executor函数
      executor(resolve, reject);
    } catch (error) {
      // 如果executor函数执行出错，直接reject
      reject(error);
    }
  }
  // then方法
  then(onFulfilled, onRejected) {
    // 如果onFulfilled不是函数，就忽略onFulfilled，直接返回value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    // 如果onRejected不是函数，就忽略onRejected，直接扔出错误
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // promise2 是在new完MyPromise之后才new出来的，所以resolvePromise中的promise2是undefined
        // 所以这里转成异步调用,等同步代码执行完后再执行resolvePromise，这样promise2就有了
        // 而且then方法就是异步的

        // try catch 只能捕获同步代码的错误， 所以需要在setTimeout中再加try catch
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    })

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 如果promise2和x指向同一对象，执行失败态抛错
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 如果x是一个对象或者函数
    let called = false;  // 避免使用别人的Promise（可能会同时调用失败和成功，Promise A+ 规定只能调用一个），限制一下
    try {
      // 把x.then赋值给then Promise A+ 规则
      let then = x.then;
      if (typeof then === 'function') { // 如果then是一个函数，就默认是promise了 Promise A+ 规则
        // 就让then执行 this 为 x
        // 第一个参数是this，后面是成功的回调和失败的回调
        then.call(x, // 为什么不直接x.then()? 能保证不再取then，有可能第二次取值报错
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject); // resolve里有可能还是一个promise,所以再处理一遍
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );

      } else {
        // 如果then不是一个函数，就直接返回成功态，值是x
        resolve(x);
      }
    } catch (error) {
      // 如果取x.then的值时抛出错误error，那么promise2需要失败态，失败原因是error
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    // 如果x是一个普通值，就直接返回成功态
    resolve(x);
  }
}

// 测试代码
MyPromise.deferred = function () {
  let result = {};
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
}

MyPromise.all = function(promises) {
  return new MyPromise((resolve, reject) => {
    if (!Array.isArray(promises)) return reject('error');
    if (promises.length === 0) return resolve([]);
    for (let i = 0; i < promises.length; i++) {
      if (!promises[i] instanceof MyPromise) {
        promises[i] = new MyPromise(resolve => resolve(promises[i]));
      }
    }
    let result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(data => {
        result[i] = data;
        count++;
        if (count === promises.length) resolve(result);
      }, reject);
    }
  });
}

MyPromise.finally = function(onFinally) {
  return this.then(
    value => MyPromise.resolve(onFinally()).then(() => value),
    reason => MyPromise.resolve(onFinally()).then(() => { throw reason })
  );
}


module.exports = MyPromise;