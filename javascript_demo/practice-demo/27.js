/**
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。
 * 元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。
 * 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：
 * 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
 * 返回 k。
 * [3,3,2,2] 3
 * 2, nums = [2,2,_,_]
 *
 * @param {*} nums
 * @param {*} val
 */

var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let l = i + 1;
      while (l<nums.length) {
        if (nums[l] == nums[i]) {
          l++;
        } else {
          let temp;
          temp = nums[i];
          nums[i] = nums[l];
          nums[l] = temp;
          break
        }
      }
    }
  }
  for (let i = 0;i < nums.length; i++ ) {
    if (nums[i]!== val) {
      count++
    }
  }
  return count
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
