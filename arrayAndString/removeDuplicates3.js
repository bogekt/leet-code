/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for (let x of nums)
        if (x > nums[i])
            nums[++i] = x

    return i + 1
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    let a = []
    expect(removeDuplicates(a = [1,1,2])/*?*/, 2) && expect(a.slice(0, 2), [1,2]) //?. $
    expect(removeDuplicates(a = [0,0,1,1,1,2,2,3,3,4])/*?*/, 5) && expect(a.slice(0, 5), [0,1,2,3,4]) //?. $
}