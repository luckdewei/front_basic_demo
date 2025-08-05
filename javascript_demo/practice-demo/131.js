/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length
    const path = []
    const ans = []

    const dfs = (i) => {
        if (i == n) {
            ans.push([...path])
            return
        }
        for(let j=i;j<n;j++) {
            let t = s.slice(i, j+1)
            if (t == t.split('').reverse().join('')) {
                path.push(t)
                dfs(j+1)
                path.pop()
            }
        }
    }
    dfs(0)
    return ans
};


var partition = function(s) {
    const n = s.length
    const path = []
    const ans = []

    const dfs = (i, start) => {
        if (i == n) {
            ans.push([...path])
            return
        }

        // 不选
        if (i < n - 1) {
          dfs(i+1, start)
        }
        // 选
        let sub = s.slice(start, i+1)
        if (sub == sub.split('').reverse().join('')) {
          path.push(sub)
          dfs(i+1, i+1)
          path.pop()
        }
    }
    dfs(0,0)
    return ans
};

console.log(partition('aab'))