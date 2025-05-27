// const arr = [1, 2, 3]


// Array.prototype.last = function() {
//     return this[this.length - 1]
// }

// Object.defineProperty(Array.prototype, 'last', {
//   enumerable: false  
// })


// for(let num in arr) {
//     console.log(num)
// }


// async function fn() {
//     console.log(1)
//     await delay(3000)
//     console.log(2)
// }

// function delay(wait) {
//     return new Promise((resolve) => setTimeout(resolve, wait))
// }

// fn()

// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(12)
//     }, 2000)
// })

// let p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(33)
//     }, 1000)
// })


// let p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(99)
//     }, 1500)
// })


// Promise.prototype.myAll = (promises) => {
//     return new Promise((resolve, reject) => {
//         let count = 0
//         let result = []
//         let index = 0
//         if (promises.length === 0) resolve([])
//         for(let p of promises) {
//             let resultIndex = index
//             index += 1
//             Promise.resolve(p).then(res => {
//                 result[resultIndex] = res
//                 count+=1
//                 if (count === index) {
//                     resolve(result)
//                 }
//             }).catch(err => reject(err))
//         }
//     })
// }


// Promise.prototype.myAll([p1, p2, p3]).then(res => {
//     console.log('res', res)
// })



class a {
}

class b {
}


let aa = new a()

let bb = new b()


console.log(aa === b)