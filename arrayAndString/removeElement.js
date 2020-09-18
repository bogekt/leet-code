/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0

    for (let i = 0; i < nums.length; i++)
        if (nums[i] !== val) 
            nums[k++] = nums[i]

    return k
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    let a = []
    expect(removeElement(a = [3,2,2,3], 3)/*?*/, 2) && expect(a, [2,2,2,3]) //?. $
    expect(removeElement(a = [0,1,2,2,3,0,4,2], 2)/*?*/, 5) && expect(a, [0,1,3,0,4,0,4,2]) //?. $
}