/**
 * @param {number[]} nums
 * @return {number}
 */
var moveZeroes = function(nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++)
        if (nums[i] !== 0)
            nums[k++] = nums[i]
            
    for (let i = 0; i < nums.length - k; i++)
        nums[nums.length - 1 - i] = 0

    return nums
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(moveZeroes([0,1]) /*?*/, [1,0]) //?. $
    expect(moveZeroes([0,1,0,3,12]) /*?*/, [1,3,12,0,0]) //?. $
}