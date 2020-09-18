/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums.length) return 0

    let min = Number.MAX_SAFE_INTEGER
    let left = 0
    let sum = 0

    for (let right = 0; right < nums.length; ++right) {
        sum += nums[right]
        
        while (sum >= s) {
            min = Math.min(right - left + 1, min)
            sum -= nums[left++]
        }
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