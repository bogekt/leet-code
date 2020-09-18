/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let k = 0

    while (i < nums.length) {
        let j = i + 1
        while (nums[i] === nums[j] && j < nums.length) j++
        nums[++k] = nums[j]
        i = j
    }

    nums.splice(-(nums.length - k))

    return k
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    let a = []
    expect(removeDuplicates(a = [1,1,2])/*?*/, 2) && expect(a, [1,2]) //?. $
    expect(removeDuplicates(a = [0,0,1,1,1,2,2,3,3,4])/*?*/, 5) && expect(a, [0,1,2,3,4]) //?. $
}