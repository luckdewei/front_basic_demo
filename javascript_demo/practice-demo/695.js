var maxAreaOfIsland = function(grid) {
    let ans = 0
    const m = grid.length, n = grid[0].length;
    const dfs = (grid, i, j)=> {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) {
            return 0
        }
        grid[i][j] = 2
        return 1 + dfs(grid, i, j+1) + dfs(grid, i+1, j) + dfs(grid, i-1, j) + dfs(grid, i, j-1)
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
          if (grid[i][j] == 1) {
            let area = dfs(grid, i, j)
            ans = Math.max(ans, area)
          }
        }
    }
    return ans
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))



let result = Array.from({ length:5 }, () => 0) 
        console.log(result)