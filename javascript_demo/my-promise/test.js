let p1 = new Promise((resolve, reject) => {
  resolve(1)
})

let p2 = new Promise((resolve, reject) => {
  reject(1)
})

let p3 = new Promise((resolve, reject) => {
  throw('报错')
})

console.log('p1', p1);

console.log('p2', p2);

console.log('p3', p3)
