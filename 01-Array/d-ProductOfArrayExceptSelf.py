# 238. Product of Array Except Self

# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
# You must write an algorithm that runs in O(n) time and without using the division operation.

# Example 1:
# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]

# Example 2:
# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]

from typing import List

# Solution 1: Brute-Force -> Not passing with Time limit exceeded
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        l = []
        for i in nums:
            product = 1
            for j in nums:
                if i != j:
                    product*=j
            l.append(product)
        return l

# Solution 2: Prefix and Suffix products
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        output = [1]*n

        prefix = 1
        for i in range(n):
            output[i] = prefix
            prefix = prefix * nums[i]

        suffix = 1
        for i in range(n-1, -1, -1):
            output[i] = output[i] * suffix
            suffix = suffix * nums[i]

        return output

# Solution 3: Remove useless variables to optimize memory
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        output = [1]*len(nums)

        acc = 1
        for i in range(len(nums)):
            output[i] = acc
            acc = acc * nums[i]

        acc = 1
        for i in range(len(nums)-1, -1, -1):
            output[i] = output[i] * acc
            acc = acc * nums[i]

        return output








