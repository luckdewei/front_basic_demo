/**
 * 
 * @param {*} nums 
 * 
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 */


var removeDuplicates = function(nums) {
  const len = nums.length
  let j = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] !==nums[j]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j+1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))