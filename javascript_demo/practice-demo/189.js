// 189 轮转数组


// var rotate = function(nums, k) {
//   // let ans = []
//   let len = nums.length
//   let kk = 0
//     while(kk<k) {
//       let t = nums[len-1]
//       let j = len-1
//       while(j>0) {
//         nums[j] = nums[j-1]
//         j--
//       }
//       nums[0] = t
//       kk++
//     }
//     return nums

// }; // 超时

var rotate = function(nums, k) {
  const numsPre = nums.splice(nums.length - (k % nums.length))
  console.log('nums:', nums)
  nums.splice(0, 0, ...numsPre)
};



var rotate = function(nums, k) {
  let len = nums.length
  k = k%len
  while(k>0) {
    nums.unshift(nums.pop())
    k--
  }
}; // 超时




// console.log(rotate([1,2], 3))
console.log(rotate([1,2,3,4,5,6,7], 3))