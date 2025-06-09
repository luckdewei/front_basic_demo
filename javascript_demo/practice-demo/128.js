// 128 最长连续序列

var longestConsecutive = function(nums) {
  let longestStreak = 0;
  nums.sort((a, b) => a - b); 
  let currentStreak = 1;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) continue
      if (nums[i] + 1 === nums[i + 1]) {
        currentStreak++;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
  }
  return longestStreak;
};


var longestConsecutive = (nums) => {
  let ans = 0
  let s = new Set(nums)

  return ans
}

console.log(longestConsecutive([100,4,200,1,3,2]))