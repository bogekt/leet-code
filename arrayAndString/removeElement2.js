/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    let n = nums.length

    while (i < n) {
        if (nums[i] === val)
            nums[i] = nums[--n]
        else 
            i++
    }

    return n
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('./utils.js');
    let a = []
    expect(removeElement(a = [3,2,2,3], 3)/*?*/, 2) && expect(a, [2,2,2,3]) //?. $
    expect(removeElement(a = [0,1,2,2,3,0,4,2], 2)/*?*/, 5) && expect(a, [0,1,4,0,3,0,4,2]) //?. $
    expect(removeElement(a = [2], 3)/*?*/, 1) && expect(a, [2]) //?. $
}