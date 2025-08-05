/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 定义：dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
    let dp = new Array(nums.length).fill(1);
    // base case：dp 数组全都初始化为 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log('dp:', dp)
    let res = 0; 
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i]);
    }
    return res;
};


var lengthOfLIS = (nums) => {
    const n = nums.length
    let g = []

    const search = (arr, target) => {
        let l = -1, r = arr.length
        while(l+1 < r) {
            let mid = Math.floor((l+r)/2)
            if (arr[mid] == target) {
                return mid
            }
            if (arr[mid] < target) {
                l = mid
            } else {
                r = mid
            }
        }
        return r
    }

    for(let i = 0; i<n;i++) {
        let index = search(g,nums[i])
        if (index == g.length) {
            g.push(nums[i])
        } else {
            g[index] = nums[i]
        }
    }
    console.log('g:',g)
    return g.length
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));




const search = (arr, target) => {
    let l = 0, r = arr.length
    while(l < r) {
        let mid = Math.floor((l+r)/2)
        if (arr[mid] == target) {
            return mid
        }
        if (arr[mid] < target) {
            l = mid+1
        } else {
            r = mid-1
        }
    }
    return r
}

console.log(search([1, 3, 4, 5, 8], 7))
