function myInstanceof(target, constructFn) {
  if (target === null || !(target instanceof Object)) {
    return false
  }
  let proto = Object.getPrototypeOf(target)
  let prototype = constructFn.prototype
  while(true) {
    if (prototype === null) return false
    if (prototype === proto) return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceof('', Array))


// console.log( '' instanceof Object)