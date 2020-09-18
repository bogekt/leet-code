/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s, left, right) {
    if (!s || s.length === 0 || s.length === 1) return s

    left = typeof left === 'number' ? left : 0
    right = typeof right === 'number' ? right : (s.length - 1)
    if (typeof s === 'string') s = s.split('')

    while (left < right) {
        // a = [b, b = a][0]
        [s[left], s[right]] = [s[right], s[left]]
        left++, right--
    }

    return s
};

const { expect } = require('../utils.js');
expect(reverseString()/*?*/, undefined) //?. $
expect(reverseString(['a'])/*?*/, ['a']) //?. $
expect(reverseString('ab')/*?*/, ['b','a']) //?. $
expect(reverseString('abc')/*?*/,  ['c', 'b', 'a']) //?. $