// 无重复字符的最长子串

/**
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * @param {*} s 
 * @returns {number} 长度
 */

var lengthOfLongestSubstring = (s) => {
  let len = s.length;
  if (len === 0) return 0;
  let max = 0;
  let left = 0;
  let right = 0;
  let set = new Set();
  while(right < len) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      max = Math.max(max, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
}
