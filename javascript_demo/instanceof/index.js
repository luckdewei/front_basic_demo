
function myInstanceof(target, Func) {
  if (!target || typeof target!=='object') return false
  let proto = Object.getPrototypeOf(target)
  let prototype = Func.prototype
  while(true) {
    if (proto === prototype) return true
    if (proto === null) return false
    proto = Object.getPrototypeOf(proto)
  }
}