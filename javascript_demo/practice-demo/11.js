// 盛最多的水

/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 */

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

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
