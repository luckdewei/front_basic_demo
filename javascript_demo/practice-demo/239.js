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
var maxSlidingWindow = function (nums, k) {
  const ans = [];
  const q = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (i - q[0] >= k) {
      q.shift();
    }
    if (i >= k - 1) {
      ans.push(nums[q[0]]);
    }
  }
  return ans;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
