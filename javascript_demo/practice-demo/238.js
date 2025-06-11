


var productExceptSelf = function(nums) {
  let len = nums.length
  let ans = new Array(len).fill(1)
  let i=0,j=0;
  while(i<len){
    ans[i]*= i ==j ? 1: nums[j]
    j++
    if (j==len) {
      i++, j=0
    }
  }
  return ans
};

var productExceptSelf = function(nums) {

}


console.log(productExceptSelf([1,2,3,4]))