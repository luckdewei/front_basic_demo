/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = []
    let path = []
    const dfs = (startIndex) => {
        if (k==path.length) {
            ans.push([...path])
            return
        }
        for(let i=startIndex;i<=n;i++) {
            path.push(i)
            dfs(i+1)
            path.pop()
        }
    }
    dfs(1)
    return ans
};

console.log(combine(4, 2))