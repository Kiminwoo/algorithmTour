/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {

    for (let index = 0; index < nums.length; index++) {
        if (target <= nums[index]) {
            console.log("index" + index)

            return index;
        }
    }
    
    return nums.length;
};

console.log(searchInsert([1, 3, 5, 6],5))
