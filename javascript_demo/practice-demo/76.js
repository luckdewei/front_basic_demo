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
// var minWindow = function (s, t) {
//   const map = new Array(128).fill(0);
//   const m = s.length,
//     n = t.length;

//   for (let char of t) {
//     map[char.charCodeAt()]++;
//   }

//   let cnt = 0;
//   for (let num of map) {
//     if (num > 0) cnt++;
//   }

//   let res = "";

//   for (let i = 0, j = 0, c = 0; i < m; i++) {
//     const rcode = s.charCodeAt(i);

//     map[rcode]--;
//     if (map[rcode] === 0) {
//       c++;
//     }

//     if (c === cnt) {
//       while (j <= i && map[s.charCodeAt(j)] < 0) {
//         map[s.charCodeAt(j++)]++;
//       }
//       if (res === "" || i - j + 1 < res.length) {
//         res = s.substring(j, i + 1); // 修正切片参数
//       }
//     }
//   }

//   return res;
// };


var minWindow = (s, t) => {
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
