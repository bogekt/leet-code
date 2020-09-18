/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    if (!nums) return nums
    nums.sort((a, b) => a - b)

    let sum = 0
    for (i = 0; i < nums.length - 1; i += 2) 
        sum += nums[i]

    return sum
};

const { expect } = require('../utils.js');
expect(arrayPairSum()/*?*/, undefined) //?. $
expect(arrayPairSum([2,1])/*?*/, 1) //?. $
expect(arrayPairSum([1,4,3,2])/*?*/, 4) //?. $
expect(arrayPairSum([6214, -2290, 2833, -7908])/*?*/, -5075) //?. $