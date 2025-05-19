// 最接近的三数之和

/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。
 * 请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * 
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。
 */

var threeSumClosest = function(nums, target) {
    const len = nums.length;
    let near = 999999;
    let res = 0
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i<len; i++) {
      let l = i+1
      let r = len - 1
      while (l<r) {
        let an = nums[i] + nums[l] + nums[r]
        let abs = Math.abs(an-target)
        if (abs < near) {
          near = abs
          res = an
        }
        if (an<target) {
          l++
        } else {
          r--
        }
      }
    }
    return res
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))

