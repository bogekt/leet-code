/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (!nums || !nums.length) return nums
    if (nums.length === 1 || !k) return nums
    if (k >= nums.length && k % nums.length === 0) return nums

    k = k % nums.length
    let i = 0

    while(i++ < k) {
        let last = nums[nums.length - 1]
        for (let j = nums.length - 1; j; j--)
            nums[j] = nums[j - 1]
        nums[0] = last
    }

    return nums
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(rotate([1,2], 3)/*?*/,[2,1]) //?. $
    expect(rotate([1,2,3], 1)/*?*/, [3,1,2]) //?. $
    expect(rotate([1,2,3], 2)/*?*/, [2,3,1]) //?. $
    expect(rotate([1,2,3], 3)/*?*/, [1,2,3]) //?. $
    expect(rotate([1,2,3,4,5,6,7], 3)/*?*/, [5,6,7,1,2,3,4]) //?. $
    expect(rotate([-1,-100,3,99], 2)/*?*/, [3,99,-1,-100]) //?. $
}