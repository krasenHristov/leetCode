/*
Given an array of integers nums and an integer target, return indices of the two numbers
such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  const length = nums.length;
  for (let i = 0; i < length; i++) {

    const num = nums[i];
    const diff = target - num;

    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }
  return [];
}

// time complexity: O(n)

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
