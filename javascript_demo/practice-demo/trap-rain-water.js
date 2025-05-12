// 接雨水
// height = [0,1,0,2,1,0,1,3,2,1,2,1]
// output = 6
// 思路：单调栈, 双指针


// 双指针: 

var tap = (height) => {
    let res = 0
    const len = height.length
    if (!len) return res
    let L = 0
    let R = len - 1
    let LMax = 0
    let RMax = 0
    while(L < R) {
        // 哪边小就加哪边的高度差，然后移动指针，并更新最大值
        if (height[L] < height[R]) {
            LMax = Math.max(height[L], LMax)
            res += Math.abs((LMax - height[L]))
            L++
        } else {
            RMax = Math.max(height[R], RMax)
            res += Math.abs((RMax - height[R]))
            R--
        }
    }
    return res
}



// 单调栈
var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }
        stack.push(i);
    }
    return ans;
};

console.log(tap([0,1,0,2,1,0,1,3,2,1,2,1]));
