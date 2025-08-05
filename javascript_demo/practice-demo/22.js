/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = []
  const path = new Array(n*2)
  const dfs = (left, right) => {
    if (right == n) {
      ans.push(path.join(''))
      return
    }
    if (left < n) {
      path[left + right] = '('
      dfs(left + 1, right)
    }
    if (right < left) { 
      path[left + right] = ')'
      dfs(left, right + 1);
    }
  }
  dfs(0, 0)
  return ans
};

console.log(generateParenthesis(2))