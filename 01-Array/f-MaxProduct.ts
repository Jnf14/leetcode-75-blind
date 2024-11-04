// 152. Maximum Product Subarray


// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


// Solution 1: Keep track of min and max products, since next int could be negative (higher than max)
function maxProduct(nums: number[]): number {
  var max = nums[0]
  var min = nums[0]
  var current = nums[0]

  for(var i = 1; i < nums.length; i++){

      var temp = max
      max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
      min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);

      if(max > current){
          current=max
      }
  }

  return current
};
