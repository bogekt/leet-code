/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0

    for(let i = 0, j = 0; i < nums.length; i++) 
        if (nums[i] === 1)
            max = Math.max(max, ++j)
        else 
            j = 0

    return max
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(findMaxConsecutiveOnes([1,0,1,1,0,1])/*?*/, 2) //?. $
    expect(findMaxConsecutiveOnes([1,1,0,1,1,1])/*?*/, 3) //?. $
}