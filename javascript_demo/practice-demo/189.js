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
var rotate = function(nums, k) {
    let len = nums.length
    let stack = []
    let j = k
    for(let i=len-1;i>=0;i--) {
        if (j>0) {
            stack.push(nums[i])
            j--
        } else {
            nums[i+k]=nums[i]
        }
    }
    while(stack.length) {
        nums[stack.length-1] = stack.shift()

    }
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))