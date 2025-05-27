// leetcode 5 最长回文串

// 事件复杂度 O(n^3)  空间复杂度O(1)

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


// leetcode 11 盛最多的水
// 时间复杂度 O(N) 空间复杂度 O(1)
var maxArea = function (height) {
    let len = height.length;
    let L = 0,
      R = len - 1;
    let MaxArea = 0;
    while (L < R) {
      let area = Math.min(height[L], height[R]) * (R - L);
      MaxArea = Math.max(area, MaxArea);
      if (height[L] < height[R]) {
        L++;
      } else {
        R--;
      }
    }
    return MaxArea;
};

// leetcode 15 三数之和
// 时间复杂度: O(N^2) 空间复杂度: O(1)
var threeSum = (nums) => {
    let res = [];
    const len = nums.length;
    // [-10，-2，-2，0，0，1，2，2，2，2，5，5]
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let l = i + 1;
      let r = len - 1;
      while (l < r) {
        let an = nums[i] + nums[l] + nums[r];
        if (an === 0) {
          res.push([nums[i], nums[l], nums[r]]);
          while(l< r && nums[l] === nums[l+1]) l++
          while(l<r && nums[r] === nums[r-1]) r--
          l++;
          r--;
        }
        if (an < 0) {
          l++;
        } else if (an > 0) {
          r--;
        }
      }
    }
    return res;
};

// leetcode 16 最接近的三数之和
// 时间复杂度：O(N^2)

var threeSumClosest = function(nums, target) {
    const len = nums.length;
    let near = 999999;
    let res = 0
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i<len; i++) {
      let l = i+1
      let r = len - 1
      while (l<r) {
        let an = nums[i] + nums[l] + nums[r]
        let abs = Math.abs(an-target)
        if (abs < near) {
          near = abs
          res = an
        }
        if (an<target) {
          l++
        } else {
          r--
        }
      }
    }
    return res
};