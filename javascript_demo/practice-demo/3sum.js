// 三数之和

// input [-1,0,1,2,-1,-4]  nums[i] + nums[j] + nums[k] == 0
// output [[-1,-1,2],[-1,0,1]]

// 考察双指针

var threeSum = (nums) => {
    let res = []
    let len = nums.length
    if (!len || len < 3) return res
    // 先排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i <len; i++) {
        // 如果当前数字大于0，则三数之和一定大于0，可以退出循环
        if (nums[i] > 0) break
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let L = i + 1
        let R = len - 1
        while(L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]])
                while(L < R && nums[L] === nums[L+1]) L++
                while(L < R && nums[R] === nums[R-1]) R--
                L++
                R--
            } 
            else if (sum < 0) L++
            else if (sum > 0) R--
        }
    }
    return res
}

console.log(threeSum([-1,0,1,2,-1,-4]));
