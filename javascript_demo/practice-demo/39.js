// 39 组合总和

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]

var combinationSum = function (candidates, target) {
  const output = []
  candidates = candidates.sort((a, b) => a - b)

  const dfs = (an, index, res) => {
    if (index === candidates.length) {
        return
    }
    if (target === an) {
        output.push(res)
        return
    }

    for(let i = index; i < candidates.length; i++) {
        if (an + candidates[i] > target) return
        dfs(an + candidates[i],i, [...res, candidates[i]])
    }
    return res
  }

  dfs(0, 0, [])
  return output
};


console.log(combinationSum([8,7,4,3], 11))
