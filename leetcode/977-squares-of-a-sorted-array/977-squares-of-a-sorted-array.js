/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(item => item * item).sort(function(a,b){return a - b })
};