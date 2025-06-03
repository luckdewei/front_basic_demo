// let p1 = new Promise((resolve, reject) => {
//   resolve(1)
// })

// let p2 = new Promise((resolve, reject) => {
//   reject(1)
// })

// let p3 = new Promise((resolve, reject) => {
//   throw('报错')
// })

// console.log('p1', p1);

// console.log('p2', p2);

// console.log('p3', p3)

// const MyPromise = require('./MyPromise.js')

// var promise = new MyPromise(function (resolve, reject) {
//   setTimeout(function () {
//       resolve(1);
//   }, 3000)
// })
// promise.then(2).then(n => {
//   console.log('n', n) // 1
// })


let p1 = new Promise((resolve) => {
  setTimeout(() => {
      resolve(12)
  }, 2000)
})

let p2 = new Promise((resolve) => {
  setTimeout(() => {
      resolve(33)
  }, 1000)
})


let p3 = new Promise((resolve) => {
  setTimeout(() => {
      resolve(99)
  }, 1500)
})

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject(1111)
  }, 8000)
})

Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        for(let p of promises) {
            Promise.resolve(p).then(res => {
                resolve(res)
            }).catch(err => reject(err))
        }
    })
}


Promise.myRace([p1, p2, p3, p4]).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
})