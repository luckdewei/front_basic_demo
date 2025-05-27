function myNew(constructor, ...args) {

  let obj = Object.create(constructor.prototype)

  let res = constructor.apply(obj, args)

  typeof res === 'object' ? res : obj
}