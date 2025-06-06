// 56.合并区间

// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


var merge = function(intervals) {
    let ans = []
    if(intervals.length<2) return intervals

    intervals.sort(
        (a, b) => a[0] - b[0]
    )
    let i = 0
    while(i<intervals.length) {
        let a = intervals[i]
        let b = ans[ans.length-1]
        if (ans.length === 0 || a[0] > b[1]) { // 不重叠
            ans.push(a)
        } else {
            b[1] = Math.max(b[1], a[1])
        }
        i++
    }
    return ans
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
