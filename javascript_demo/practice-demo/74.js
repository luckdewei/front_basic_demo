// 搜索二维矩阵

var searchMatrix = function(matrix, target) {
    const m= matrix.length,n= matrix[0].length
    let k = -1
    for(let i=0;i<m;i++) {
        let r = matrix[i][n-1], l = matrix[i][0]
        if (target <= r && target >=l) {
            k = i
            break;
        }
    }
    return k != -1 && matrix[k].includes(target)
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))