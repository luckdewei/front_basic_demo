


Function.prototype.myCall = function(context = window, ...args) {
  typeof context === 'object' ? context : new Object(context)
  let key = Symbol()
  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}


Function.prototype.myBind = function(context, ...args) {
  let that = this
  return function() {
    return that.myCall(context, ...args)
  }
}


function a(a, b) {
  console.log(this, a, b)
  return a + b
}

let obj = {}

a.myCall(obj, 2, 3)

