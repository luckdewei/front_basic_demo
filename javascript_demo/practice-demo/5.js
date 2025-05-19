// 5 最长回文子串
// 给一个字符串s，找到s中最长的回文子串

var longestPalindrome = function (s) {
  const len = s.length;
  let maxStr = s[0];
  if (isPls(s)) return s;
  for (let i = 0; i < len; i++) {
    let R = i + 1;
    while (R <= len) {
      let temp = s.slice(i, R);
      if (isPls(temp) && maxStr.length < temp.length) {
        maxStr = temp;
      }
      R++;
    }
  }
  return maxStr;
};

var isPls = function (s) {
  let len = s.length;
  if (len < 2) return false;
  let L = 0,
    R = len - 1;
  while (L < R) {
    if (s[L] === s[R]) {
      L++, R--;
    } else {
      return false;
    }
  }
  return true;
};
