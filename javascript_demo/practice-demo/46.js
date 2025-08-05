// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let len = nums.length
  let ans = []
  let p = new Array(len).fill(0)
  const dfs = (i, s) => {
    // 边界条件
    if (i == len) {
      ans.push([...p])
      return
    }
    for(x of s) {
      p[i] = x
      let s1 = new Set(s)
      s1.delete(x)
      dfs(i+1, s1)
    }
  }
  dfs(0, new Set(nums));
  return ans
};



var permute = function (nums) {
    let len = nums.length
    let ans = []
    let p = new Array(len).fill(0)
    let on_path = new Array(len).fill(false)
    const dfs = (i) => {
        // 边界条件
        if (i == len) {
            ans.push([...p])
            return
        }
        for (let j=0;j<len;j++) {
            if (!on_path[j]) {
                p[i] = nums[j]
                on_path[j] = true
                dfs(i + 1)
                on_path[j] = false
            }
        }
    }
    dfs(0);
    return ans
};

console.log(permute([1,2,3]))
