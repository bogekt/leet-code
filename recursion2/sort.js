/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSortTopDown(nums)
};

function mergeSortTopDown(array) {
    if (array.length <= 1) return array

    const a = array.slice(0, Math.trunc(array.length/2))
    const b = array.slice(Math.trunc(array.length/2))

    return merge(mergeSortTopDown(a), mergeSortTopDown(b), array.length)
}

function merge(a, b, n) {
    const result = []
    let i = 0
    let j = 0
    for (let k = 0; k < n; k++)
        result[k] = j === b.length || i < a.length && a[i] < b[j]
            ? a[i++] 
            : b[j++]

    return result
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(merge([1], [], 1), [1]) //?. $
    expect(merge([], [1], 1), [1]) //?. $
    expect(merge([1], [2], 2), [1, 2]) //?. $
    expect(merge([2], [1], 2), [1, 2]) //?. $
    expect(merge([1], [1], 2), [1, 1]) //?. $
    expect(merge([1, 2], [3], 3), [1, 2, 3]) //?. $
    expect(merge([1, 3], [2], 3), [1, 2, 3]) //?. $
    expect(merge([1], [2, 3], 3), [1, 2, 3]) //?. $
    expect(merge([2], [1, 3], 3), [1, 2, 3]) //?. $
    expect(sortArray([1, 3, 2]), [1, 2, 3]) //?. 
    expect(sortArray([5,2,3,1]), [1,2,3,5]) //?. $
    expect(sortArray([5,1,1,2,0,0]), [0,0,1,1,2,5]) //?. $
}