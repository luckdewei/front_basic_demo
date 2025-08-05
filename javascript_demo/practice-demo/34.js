// 34. 在排序数组中查找元素的第一个和最后一个位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)]       
};

var searchRange = function(nums, target) {
  if (!nums.length) return [-1, -1]     
  let left = 0, right = nums.length - 1
  let index = -1, lastIndex = -1
  while(left <= right) {
    
  }
};