// 209. 长度最小的子数组

// 给定一个含有 n 个正整数的数组和一个正整数 target。
// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组，
// 并返回其长度。如果不存在符合条件的子数组，返回 0。

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

var minSubArrayLen = function (target, nums) {
  let an = nums.length + 1; // 子数组长度
  let l =0, r = 0;
  let sum = 0;
  while(r < nums.length) {
    sum+=nums[r]
    while (sum >= target) {
      an = Math.min(an, r - l + 1);
      sum -= nums[l];
      l++;
    }
    r++
  }
  return an<=nums.length ? an : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
