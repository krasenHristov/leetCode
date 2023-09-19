/*
h n and m respectively, where spells[i] represents the strength of the ith spell and potions[j]
represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the
product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will
form a successful pair with the ith spell.



Example 1:
Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.

Example 2:
Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful.
Thus, [2,0,2] is returned.
*/

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  let succ = []

  for (let spell of spells) {
    let temp = []
    for (let pot of potions) {
      if ((spell * pot) >= success) temp.push(pot)
    }
    succ.push(temp.length)
  }

  return succ

};

// time: O(n*m)

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16))
console.log(successfulPairs([1, 2, 3], [1, 2, 3, 4, 5], 6))
console.log(successfulPairs([1, 2, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs([1, 2, 3], [1, 2, 3, 4, 5], 8))

// faster solution
function successfulPairs2(spells: number[], potions: number[], success: number): number[] {
  let succ = []

  potions.sort((a, b) => a-b)

  for(let spell of spells) {
    succ.push(binaryS(spell, potions, success))
  }

  return succ

};

function binaryS(num: number, pots: number[], succ: number): number {
  let left = 0
  let right = pots.length - 1

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (pots[mid] * num >= succ && (mid === 0 || pots[mid - 1] * num < succ)) {
      return pots.length - mid
    }

    if (pots[mid] * num < succ) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return 0
}

// time: O(n*log(m))

console.log(successfulPairs2([5, 1, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs2([3, 1, 2], [8, 5, 8], 16))
console.log(successfulPairs2([1, 2, 3], [1, 2, 3, 4, 5], 6))
console.log(successfulPairs2([1, 2, 3], [1, 2, 3, 4, 5], 7))