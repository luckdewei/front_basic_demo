// 子集

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ans = []
  let n = nums.length
  let sub = []
  const dfs = (i) => {
    if (i == n) {
      ans.push([...sub])
      return
    }
    sub.push(nums[i])
    dfs(i+1)
    sub.pop()
    dfs(i+1)
  }
  dfs(0)
  return ans
};

console.log(subsets([1,2,3]))