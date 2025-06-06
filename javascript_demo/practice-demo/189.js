var rotate = function(nums, k) {
    let len = nums.length
    let stack = []
    let j = k
    for(let i=len-1;i>=0;i--) {
        if (j>0) {
            stack.push(nums[i])
            j--
        } else {
            nums[i+k]=nums[i]
        }
    }
    while(stack.length) {
        nums[stack.length-1] = stack.shift()

    }
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))