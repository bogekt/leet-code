/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums, debug) {
    if (!nums.length) return 0
    if (nums.reduce((acc, num) => acc + num) < s) return 0

    let sub = nums

    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i]
        let j = i + 1

        while (sum < s && j < nums.length)
            sum += nums[j++]

        if (sum >= s && nums.slice(i, j).length < sub.length)
            sub = nums.slice(i, j)
        debug && (console.log(i,j), console.log(sub))
    }

    return sub.length
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(minSubArrayLen(100, [])/*?*/, 0) //?. $
    expect(minSubArrayLen(3, [1,1])/*?*/, 0) //?. $
    expect(minSubArrayLen(7, [2,3,1,2,4,3])/*?*/, 2) //?. $
    expect(minSubArrayLen(4, [1,4,4])/*?*/, 1) //?. $
    expect(minSubArrayLen(11, [1,2,3,4,5], 1)/*?*/, 3)
    expect(minSubArrayLen(15, [1,2,3,4,5])/*?*/, 5) //?. $
}