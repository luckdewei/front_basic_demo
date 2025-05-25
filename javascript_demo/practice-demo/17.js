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


console.log(letterCombinations('236'))