// N 皇后问题

function NQueens(n) {
    let ans = []
    let path = new Array(n).fill(0)
    const dfs = (r, s) => {
        if(r == n) {
            
        }
    }
    dfs(0, new Set(n))
    return ans
}

console.log(NQueens(4))