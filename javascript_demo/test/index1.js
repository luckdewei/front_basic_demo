let arr = [1, 2, 3, [4, 5, [6, 7]]]

// const flat = (arr) => {
//     let ans = []
//     arr.forEach(num => {
//         if (Array.isArray(num)) {
//             ans = ans.concat(flat(num))
//         } else {
//             ans.push(num)
//         }
//     })
//     return ans
// }

// console.log(flat(arr))

// const flat = (arr) => {
//     return arr.flat(Infinity)
// }


// const flat = (arr) => {
//     return arr.reduce((res, num) => {
//         return res.concat(Array.isArray(num) ? flat(num): num)
//     }, [])
// }

// console.log(flat(arr))


const filter = (arr, fn) => {
    let newArr = []
    for(let i = 0;i<arr.length;i++) {
        fn(arr[i], i) ? newArr.push(arr[i]): null
    }
    return newArr
}



console.log(filter([1, 2, 4], (v, i) => {
    return v > 3
}))


// typeof

// instanceof

// function myInstanceOf(a, b) {
//     let proto = Object.getPrototypeOf(a)
//     let prototype = b.prototype
//     while(true) {
//         if (proto === null) return false
//         if (proto === prototype) return true
//         proto = Object.getPrototypeOf(proto)
//     }
// }

// console.log(myInstanceOf([], Array))

// const obj = {
//     fn: () => {}
// }

// const obj = {
//     fn: function() {

//     }
// }


// function myNew(fn, ...args) {
//     let obj = Object.create()
//     Object.setPrototypeOf(obj, fn.prototype)
//     let val = fn.apply(obj, [...args])
//     return val instanceof Object ? val : obj
// }














