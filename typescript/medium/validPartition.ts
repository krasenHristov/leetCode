/*
You are given a 0-indexed integer array nums. You have to partition the array into one or more
contiguous subarrays.

We call a partition of the array valid if each of the obtained subarrays satisfies one of
the following conditions:

The subarray consists of exactly 2, equal elements. For example, the subarray [2,2] is good.
The subarray consists of exactly 3, equal elements. For example, the subarray [4,4,4] is good.
The subarray consists of exactly 3 consecutive increasing elements, that is,
the difference between adjacent elements is 1. For example, the subarray [3,4,5] is good,
but the subarray [1,3,5] is not.
Return true if the array has at least one valid partition. Otherwise, return false.

Example 1:
Input: nums = [4,4,4,5,6]
Output: true
Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
This partition is valid, so we return true.

Example 2:
Input: nums = [1,1,1,2]
Output: false
Explanation: There is no valid partition for this array.
*/



function validPartition(nums: number[], start = 0, memo = {}): boolean {
  if (start >= nums.length) return true;  // base case: if we've successfully partitioned the whole array

  if (memo[start] !== undefined) return memo[start];

  // Check for two consecutive equal numbers
  if (start + 1 < nums.length && nums[start] === nums[start + 1] && validPartition(nums, start + 2, memo)) {
    memo[start] = true;
    return true;
  }

  // Check for three consecutive equal numbers
  if (start + 2 < nums.length && nums[start] === nums[start + 1] && nums[start] === nums[start + 2] && validPartition(nums, start + 3, memo)) {
    memo[start] = true;
    return true;
  }

  // Check for three consecutive increasing numbers
  if (start + 2 < nums.length && nums[start] + 1 === nums[start + 1] && nums[start] + 2 === nums[start + 2] && validPartition(nums, start + 3, memo)) {
    memo[start] = true;
    return true;
  }

  memo[start] = false;
  return false;
}


// time: O(n)


console.log(validPartition([4,4,4,5,6])) // true
console.log(validPartition([1,1,1,2])) // false
console.log(validPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])) // true
console.log(validPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,16])) // false
console.log(validPartition([803201,803201,803201,803201,803202,803203])) // true
