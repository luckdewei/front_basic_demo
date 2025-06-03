// 239. 滑动窗口最大值

// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值

// var maxSlidingWindow = function(nums, k) {
//   let res = []
//   let len = nums.length
//   if (k >= len) {
//     return [getMax(nums)]
//   }
//   function getMax(arr) {
//     arr.sort((a, b) => a - b)
//     return arr[arr.length-1]
//   }
//     for(let i = 0; i < len; i++) {
//       let j = i + k
//       let pre = nums[i - 1]
//       let next = nums[j]
//       if (j - 1 >= len) {
//         return res
//       }
//       let an = 
//       res.push(an)
//     }
//   return res
// }; // 超时

// 单调队列
class Queue {
  constructor() {
    this.queue = []
  }
  pop() {
    return this.queue.shift()
  }
  push(val) {
    while(this.queue[0] <= val) {
      this.pop()
    }
    this.queue.push(val)
  }
  getMaxVal() {

  }
}

var maxSlidingWindow = function(nums, k) {

}


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))