var climbStairs = function(n) {
    const f = Array(n)
    f[0] = 1, f[1] = 2
    for(let i = 2; i < f.length;i++) {
        f[i] = f[i-1] + f[i-2]
    }
    return f[n-1]
};


// climbStairs(1) // 1
// climbStairs(2) // 2
climbStairs(3) // 3