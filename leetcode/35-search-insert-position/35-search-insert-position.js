/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};