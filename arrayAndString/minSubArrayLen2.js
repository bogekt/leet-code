/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums.length) return 0

    let min = Number.MAX_SAFE_INTEGER
    let sums = [nums[0]]
    for (let i = 1; i < nums.length; i++)
        sums[i] = sums[i - 1] + nums[i]
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= s)
            return 1

        let j = i + 1

        while (j < nums.length && sums[j] - sums[i] + nums[i] < s)
            j++

        if (sums[j] - sums[i] + nums[i] >= s)
            min = Math.min(j - i + 1, min)
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(minSubArrayLen(100, [])/*?*/, 0) //?. $
    expect(minSubArrayLen(3, [1,1])/*?*/, 0) //?. $
    expect(minSubArrayLen(7, [2,3,1,2,4,3])/*?*/, 2) //?. $
    expect(minSubArrayLen(4, [1,4,4])/*?*/, 1) //?. $
    expect(minSubArrayLen(11, [1,2,3,4,5])/*?*/, 3)
    expect(minSubArrayLen(15, [1,2,3,4,5])/*?*/, 5) //?. $
}