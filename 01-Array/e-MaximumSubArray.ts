// 53. Maximum Subarray

// Given an integer array nums, find the
// subarray with the largest sum, and return its sum.


// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


// Solution 1: Brute-force -> Time limit exceeded
function maxSubArray1(nums: number[]): number {
  var max = -Infinity
  for(var i=0; i<nums.length; i++){
      var currentSum = 0
      for(var j=i; j<nums.length; j++){
          currentSum += nums[j]
          max = Math.max(max, currentSum)
      }
  }
  return max
};

// Solution 2: Use a single for loop and track both the maximum sum and the current sum.
function maxSubArray2(nums: number[]): number {
  var maxSum = -Infinity
  var currentSum = 0

  for(var i=0; i<nums.length; i++){
      currentSum += nums[i]
      maxSum = Math.max(maxSum, currentSum)
      if(currentSum < 0){
          currentSum = 0
      }
  }

  return maxSum
};
