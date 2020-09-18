/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    numbers.sor

    while (left < right) {
        if (numbers[right] + numbers[left] > target)
            right--
        else if (numbers[right] + numbers[left] < target)
            left++
        else 
            return [left + 1, right + 1]
    }

    return [-1, -1]
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(twoSum([2,7,11,15], 9)/*?*/, [1,2]) //?. $
    expect(twoSum([5,25,75], 100)/*?*/, [2,3]) //?. $
    expect(twoSum([2,3,4], 6)/*?*/, [1,3]) //?. $
}