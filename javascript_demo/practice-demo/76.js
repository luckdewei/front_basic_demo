// 76 最小覆盖子串
// 给你一个字符串 s 、一个字符串 t 。
// 返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = new Map()
  let len = s.length
  let an = ''
  for(let s of t) {
    map.set(s, (map.get(s) || 0) + 1)
  }
  let dif = map.size
  let l = 0, r = 0
  while(r<len) {
    if(map.has(s[r])) {
      map.set(s[r], map.get(s[r])-1)
    }
    if (map.get(s[r]) === 0) {
      dif-- 
    }
    while(dif === 0) {
      let newAn = s.substring(l, r+1)
      if (newAn.length < an.length || an == '') {
        an = newAn
      }
      if(map.has(s[l])) {
        if(map.get(s[l]) === 0) dif++
        map.set(s[l], map.get(s[l]) + 1)
      }
      l++
    }
    r++
  }
  return an
}


console.log(minWindow('ADOBECODEBANC', 'ABC'))
