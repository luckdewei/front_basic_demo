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
    const resolve = (value) => {
      if (this.status!==PENDING) return
      this.value = value
      this.status = FULFILLED
      this.onFulfilledCallbacks(callback => callback())
    }
    const reject = (reason) => {
      if (this.status!==PENDING) return
      this.reason = reason
      this.status = REJECTED
      this.onRejectedCallbacks(callback => callback())
    }
    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }
  } 
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected: reason => {throw reason}
    if (this.status === FULFILLED) {
      setTimeout(() => {
        try {
          onFulfilled(this.value)
        } catch (error) {
          reject(error)
        }
      })
    }

    if (this.status === REJECTED) {
      setTimeout(() => {
        try {
          onRejected(this.reason)
        } catch (error) {
          reject(error)
        }
      })
    }

    if (this.status === PENDING) {
      onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          try {
            onFulfilled(this.value)
          } catch (error) {
            reject(error)
          }
        })
      })

      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            onRejected(this.reason)
          } catch (error) {
            reject(error)
          }
        })
      })
    }
  }
}

Promise.prototype.all = (promises) => {
  return Promise((resolve, reject) => {
    if (!Array.isArray(promises)) reject('promises is not array')

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
  }) 
}