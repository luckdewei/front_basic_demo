/**
 * 找出字符串中第一个匹配项的下标
 * @param {*} haystack
 * @param {*} needle
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
 * 如果 needle 不是 haystack 的一部分，则返回  -1 。
 *
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 */

var strStr = function (haystack, needle) {
  const hLen = haystack.length;
  const nLen = needle.length;
  for (let i = 0; i < hLen; i++) {
    if (nLen > hLen) return -1
    if (nLen < 2) {
      if (haystack[i] !== needle[0]) continue;
      else {
        return i
      }
    } else {
      if (hLen - i < nLen - 1 && haystack[i] !== needle[0]) return -1;
      if (haystack[i] !== needle[0]) continue;
      let l = i + 1;
      let r = 1;
      while (l - i < nLen) {
        if (haystack[l] === needle[r]) {
          if(r === nLen -1) return i
          l++;
          r++;
        } else {
          break
        }
      }
    }
  }
  return -1;
};

console.log(strStr("mississippi", "issip"));
