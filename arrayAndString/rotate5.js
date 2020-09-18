/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (!nums || !nums.length) return nums
    if (nums.length === 1 || !k) return nums
    if (k >= nums.length && k % nums.length === 0) return nums

    k %= nums.length

    reverseIntArray(nums, 0, nums.length - k - 1)
    reverseIntArray(nums, nums.length- k)
    reverseIntArray(nums)

    return nums
};

var reverseIntArray = function(s, left, right) {
    if (!s || s.length === 0 || s.length === 1) return s

    left = typeof left === 'number' ? left : 0
    right = typeof right === 'number' ? right : (s.length - 1)

    while (left < right) {
        // a = [b, b = a][0]
        // [s[left], s[right]] = [s[right], s[left]]
        s[left] ^= s[right]
        s[right] ^= s[left]
        s[left] ^= s[right]
        left++, right--
    }

    return s
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(rotate([1,2], 3)/*?*/,[2,1]) //?. $
    expect(rotate([1,2,3], 1)/*?*/, [3,1,2]) //?. $
    expect(rotate([1,2,3], 2, 1)/*?*/, [2,3,1]) //?. $
    expect(rotate([1,2,3], 3)/*?*/, [1,2,3]) //?. $
    expect(rotate([1,2,3,4,5,6,7], 3, 1)/*?*/, [5,6,7,1,2,3,4]) //?. $
    expect(rotate([-1,-100,3,99], 2)/*?*/, [3,99,-1,-100]) //?. $
    expect(rotate([1,2,3,4,5,6], 11, 1)/*?*/, [2,3,4,5,6,1]) //?.
    
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 0, 1)/*?*/, [1,2,3,4,5,6,7,8,9,0]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 1, 1)/*?*/, [0,1,2,3,4,5,6,7,8,9]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 2, 1)/*?*/, [9,0,1,2,3,4,5,6,7,8]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 3, 1)/*?*/, [8,9,0,1,2,3,4,5,6,7]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 4, 1)/*?*/, [7,8,9,0,1,2,3,4,5,6]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 5, 1)/*?*/, [6,7,8,9,0,1,2,3,4,5]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 6, 1)/*?*/, [5,6,7,8,9,0,1,2,3,4]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 7, 1)/*?*/, [4,5,6,7,8,9,0,1,2,3]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 8, 1)/*?*/, [3,4,5,6,7,8,9,0,1,2]) //?. $
    expect(rotate([1,2,3,4,5,6,7,8,9,0], 9, 1)/*?*/, [2,3,4,5,6,7,8,9,0,1]) //?. $ $
}
