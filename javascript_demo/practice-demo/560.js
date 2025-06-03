// 560. 和为 K 的子数组
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数。
// 子数组是数组中元素的连续非空序列。

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2

var subarraySum = function (nums, k) {
  const map = new Map()
  map.set(0,1)
  let count = 0, pre = 0
  for (const item of nums) {
   pre += item
   if (map.has(pre - k)) {
       count += map.get(pre - k)
   }
   map.set(pre,(map.get(pre) || 0) + 1)
  }
  return count
};

console.log(subarraySum([1,1,1,1,0,1], 2))

