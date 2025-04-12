import MyPromise from './MyPromise.js'

let p1 = new MyPromise((resolve, reject) => {
  resolve(1)
})

p1.then((res) => {
  console.log(res)
  return 1000
}).then(res => {
  throw new Error('error')
}).then(res => {
  console.log(res);
},(error) => {
  console.log('error', error);
})
