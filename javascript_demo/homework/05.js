// 35 组合总和

// 时间复杂度： O(N^2) 空间复杂度： O(N)
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

  // 17 电话号码的字母组合
  // 时间复杂度：O(logN) 空间复杂度：O(N)

  var letterCombinations = function(digits) {
    if (!digits) return [];
    const map = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
    const dfs = (s, index, res) => {
      // 递归次数等于digits长度则退出递归，将最终结果存储
      if (index === digits.length) {
        res.push(s);
        return;
      }
      // 通过digits的号码数从map中取出对应组合
      const letters = map[digits[index]];
      // 遍历得到字母组合的每个字母，将每层的字符串拼接起来，每遍历一次下探一层递归
      for (let i = 0; i < letters.length; i++)
        dfs(s + letters[i], index + 1, res);
      return res;
    };
    return dfs("", 0, []);
  }