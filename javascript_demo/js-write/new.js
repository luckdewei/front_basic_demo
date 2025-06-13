function myNew(constructor, ...args) {
  // 创建一个空对象
  const obj = {}
  // 设置原型链
  Object.setPrototypeOf(obj, constructor.prototype)
  // 将构建函数的this指向新对象，并执行构造函数的代码
  const res = constructor.apply(obj, args)
  // 如果构造函数返回的是对象，则返回该对象；否则返回新创建的对象
  return Object.prototype.toString.call(res) === '[object Object]'
    ? res
    : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

let arr = []

// let p = new arr('xx', 11)

let p = myNew(Person, 'xx', 233)

console.log(p)