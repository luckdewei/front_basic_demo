let arr = [1, 2, [3, 4, [5, 6]]]


// 第一种方法
// const flat = (arr) => {
//   return arr.flat(Infinity)
// }

// // 第二种方法
// const flat = (arr) => {
//   let ans = []
//   arr.forEach(item => {
//     if(Array.isArray(item)) {
//       ans = ans.concat(flat(item))
//     } else {
//       ans.push(item)
//     }
//   })
//   return ans
// }

// 第三种
const flat = (arr) => {
  return arr.reduce((preVal, item) => {
    return preVal.concat(Array.isArray(item) ? flat(item): item)
  }, [])
}