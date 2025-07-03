const arr = [1, 2, 3, 4]

let p = new Proxy(arr, {
    get(target, key) {
    if (target.hasOwnProperty(key)) {
        console.log('get', key)
    }
    return target[key]
  },
  set(target, key, value) {
    console.log('set', key, value)
    target[key] = value
    return true
  }
})

console.log(p)
// p.push(5)
p.pop()