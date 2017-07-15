/**
 * Two Sum
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 * You may assume that each input would have exactly one solution, and you may not use the same element twice.

 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,

 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * Solution 1 [Easy]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let ret = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ret.push(i);
        ret.push(j);
      }
    }
  }
  return ret;
};

/**
 * Solution 2 [Easy + Moderate]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];

    if (arr[temp] !== undefined) return [arr[temp], i];
    arr[nums[i]] = i;
  }
};
