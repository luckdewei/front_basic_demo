// 找到字符串中所有字母异位词

/**
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 *
 * @param {*} s
 * @param {*} p
 * @returns
 */
var findAnagrams = function (s, p) {
  const res = [],
    map = new Map();

  for (let s of p) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  for (let i = 0; i < p.length; i++) {
    map.has(s[i]) && map.set(s[i], map.get(s[i]) - 1);
  }

  for (let i = 0, j = p.length; j <= s.length; i++, j++) {
    [...map.values()].every((v) => v === 0) && res.push(i);
    map.has(s[i]) && map.set(s[i], map.get(s[i]) + 1);
    map.has(s[j]) && map.set(s[j], map.get(s[j]) - 1);
  }
  return res;
};

var findAnagrams = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++pCount[p[i].charCodeAt() - "a".charCodeAt()];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};

var findAnagrams = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  const count = Array(26).fill(0);
  
  for (let i = 0; i < pLen; ++i) {
    ++count[s[i].charCodeAt() - "a".charCodeAt()];
    --count[p[i].charCodeAt() - "a".charCodeAt()];
  }

  let differ = 0;
  for (let j = 0; j < 26; ++j) {
    if (count[j] !== 0) {
      ++differ;
    }
  }

  if (differ === 0) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    if (count[s[i].charCodeAt() - "a".charCodeAt()] === 1) {
      // 窗口中字母 s[i] 的数量与字符串 p 中的数量从不同变得相同
      --differ;
    } else if (count[s[i].charCodeAt() - "a".charCodeAt()] === 0) {
      // 窗口中字母 s[i] 的数量与字符串 p 中的数量从相同变得不同
      ++differ;
    }
    --count[s[i].charCodeAt() - "a".charCodeAt()];

    if (count[s[i + pLen].charCodeAt() - "a".charCodeAt()] === -1) {
      // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从不同变得相同
      --differ;
    } else if (count[s[i + pLen].charCodeAt() - "a".charCodeAt()] === 0) {
      // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从相同变得不同
      ++differ;
    }
    ++count[s[i + pLen].charCodeAt() - "a".charCodeAt()];

    if (differ === 0) {
      ans.push(i + 1);
    }
  }

  return ans;
};
