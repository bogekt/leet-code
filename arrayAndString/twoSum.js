/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    function binarySearch(array, value) {
        if (!array || !array.length) return -1
        if (array.length === 1) return array[0] === value ? 0 : -1
    
        let left = 0
        let right = array.length - 1
    
        while (left < right) {
            let mid = left + Math.round((right - left)/2)
            if (array[mid] < value)
                left = mid + 1
            else if (array[mid] > value)
                right = mid - 1
            else
                return mid
        }
    
        return array[left] === value ? left : -1
    }

    for (let aIndex = 0; aIndex < numbers.length - 1; aIndex++) {
        let bIndex = binarySearch(numbers, target - numbers[aIndex])
        if (bIndex !== -1)
            return [aIndex + 1, bIndex + 1]
    }

    return [-1, -1]
};

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(twoSum([2,7,11,15], 9)/*?*/, [1,2]) //?. $
    expect(twoSum([5,25,75], 100)/*?*/, [2,3]) //?. $
}