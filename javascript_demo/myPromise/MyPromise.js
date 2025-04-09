class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(func) {
    // 初始化值
    this.initValue()
    // 初始化this指向
    this.initBind()
    try {
      func(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  
  initBind() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  initValue() {
    // 初始状态
    this.PromiseStatus = MyPromise.PENDING
    // 终值
    this.PromiseResult = undefined
  }
  resolve(value) {
    if (this.PromiseStatus === MyPromise.PENDING) {
      this.PromiseStatus = MyPromise.FULFILLED
      this.PromiseResult = value
    }
  }
  
  reject(reason) {
    if (this.PromiseStatus === MyPromise.PENDING) {
      this.PromiseStatus = MyPromise.REJECTED
      this.PromiseResult = reason
    }
  }
}