// 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let l = -1,
    r = nums.length
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] == target) {
      return mid
    }
    if (nums[mid] < target) {
      l = mid
    } else {
      r = mid
    }
  }
  return r
};

console.log(searchInsert([], 1))
