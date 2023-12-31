/*
Given an unsorted array of integers nums, return the length of the longest consecutive
elements sequence.

You must write an algorithm that runs in O(n) time.


Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

function longestConsecutive(nums: number[]): number {
  let set = new Set(nums);
  let len = nums.length;
  let curSeq = 0;
  let maxSeq = 0;

  for (let i = 0; i < len; i++) {
    let num = nums[i];
    if (!set.has(num - 1)) {

      while (set.has(num)) {
        curSeq++;
        num++;
      }
    }

    maxSeq = Math.max(maxSeq, curSeq);
    curSeq = 0;
  }

  return maxSeq;
}

// time complexity: O(n*m)

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9


// better solution scoring much higher on leetcode
function longestConsecutive2(nums: number[]): number {
  let map = new Map();
  let len = nums.length;
  let curSeq = 0;
  let maxSeq = 0;

  for (let i = 0; i < len; i++) {
    let num = nums[i];
    if (!map.has(num)) {

      let left = map.get(num - 1) || 0;
      let right = map.get(num + 1) || 0;
      curSeq = left + right + 1;
      map.set(num, curSeq);

      if (left > 0) {
        map.set(num - left, curSeq);
      }

      if (right > 0) {
        map.set(num + right, curSeq);
      }

      maxSeq = Math.max(maxSeq, curSeq);
    }
  }

  return maxSeq;
}

// time: O(n)

console.log(longestConsecutive2([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive2([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
