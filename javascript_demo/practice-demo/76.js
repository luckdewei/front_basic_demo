// 76 最小覆盖子串

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = new Array(128).fill(0);
  const m = s.length,
    n = t.length;

  for (let char of t) {
    map[char.charCodeAt()]++;
  }

  let cnt = 0;
  for (let num of map) {
    if (num > 0) cnt++;
  }

  let res = "";

  for (let i = 0, j = 0, c = 0; i < m; i++) {
    const rcode = s.charCodeAt(i);

    map[rcode]--;
    if (map[rcode] === 0) {
      c++;
    }

    if (c === cnt) {
      while (j <= i && map[s.charCodeAt(j)] < 0) {
        map[s.charCodeAt(j++)]++;
      }
      if (res === "" || i - j + 1 < res.length) {
        res = s.substring(j, i + 1); // 修正切片参数
      }
    }
  }

  return res;
};



minWindow('ADOBECODEBANC', 'ABC')
