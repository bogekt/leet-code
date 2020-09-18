/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0
    if (needle.length > haystack.length) return -1
    if (haystack.length === needle.length) return haystack === needle ? 0 : -1

    let result = -1
    let i = -1
    
    while (haystack && i++ < haystack.length - needle.length)
        if (
            needle.length === 1 && haystack[i] === needle
            ||
            haystack.startsWith(needle, i)
        ) {
            result = i
            break
        }

    return result
};

const { expect } = require('../utils.js');
expect(strStr()/*?*/, 0) //?. $
expect(strStr('a')/*?*/, 0)  //?. $
expect(strStr('a', 'a')/*?*/, 0) //?. $
expect(strStr('a', 'ab')/*?*/, -1) //?. $
expect(strStr('ab', 'b')/*?*/, 1) //?. $
expect(strStr('abc', 'b')/*?*/, 1) //?. $
expect(strStr('abcde', 'abc')/*?*/, 0) //?. $
expect(strStr('abcde', 'cde')/*?*/, 2) //?. $
expect(strStr('abcde', 'bcd')/*?*/, 1) //?. $
