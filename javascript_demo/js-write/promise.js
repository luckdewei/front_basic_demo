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
      this.onFulfilledCallbacks.forEach(callback => callback())
    }
    const reject = (reason) => {
      if (this.status!==PENDING) return
      this.reason = reason
      this.status = REJECTED
      this.onRejectedCallbacks.forEach(callback => callback())
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
    let p2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(p2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
  
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(p2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
  
      if (this.status === PENDING) {
        onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(p2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
  
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(p2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })
    return p2
  }
}

function resolvePromise(p2, x, resolve, reject) {
  if (p2 === x) return new reject(new Error('xxxx'))
  if (x !==null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return
            called = true
            resolvePromise(p2, y, resolve, reject)
          },
          r => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}


let p1 = new MyPromise((resolve, reject) => {
  resolve(1)
})

let p2 = new MyPromise((resolve, reject) => {
  reject(1)
})

let p3 = new MyPromise((resolve, reject) => {
  throw('报错')
})