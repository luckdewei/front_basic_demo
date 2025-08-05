

/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     const n = nums.length
//     const dfs= (i)=> {
//         if (i >= n) return 0
//         let res = Math.max(dfs(i+1), dfs(i+2)+nums[i])
//         return res
//     }
//     return dfs(0)
// };  

var rob = function (nums) {
    const n = nums.length
    const path = Array(n+2).fill(0)
    for (let i = 0; i < n; i++) {
        path[i+2] = Math.max(path[i+1], path[i] + nums[i])
    }
    return path[n+1]
};  



console.log(rob([1, 2, 3, 1]))