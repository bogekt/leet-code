/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs, debug) {
    if (!strs || !strs.length) return ''
    if (strs.length === 1) return strs[0]

    let i = -1

    while (i++ < strs[0].length) 
        for (let j = 1; j < strs.length; j++)
            if (strs[j].length === i || strs[j][i] !== strs[0][i])
                return strs[0].substring(0, i)

    return i === strs[0].length ? strs[0] : ''
};

const { expect } = require('../utils.js');
expect(longestCommonPrefix()/*?*/, '') //?. $
expect(longestCommonPrefix(['a'])/*?*/, 'a') //?. $
expect(longestCommonPrefix(['abc'])/*?*/, 'abc') //?. $
expect(longestCommonPrefix(['a', 'a'])/*?*/, 'a') 
expect(longestCommonPrefix(['ab', 'ab'])/*?*/, 'ab') //?. $
expect(longestCommonPrefix(['a', 'ab'])/*?*/, 'a') //?. $
expect(longestCommonPrefix(['ab', 'b'], true)/*?*/, '') //?. $
expect(longestCommonPrefix(['abcde', 'abc', 'abcde'])/*?*/, 'abc') //?. $
expect(longestCommonPrefix(['abc123', 'abc456', 'abc789'])/*?*/, 'abc') //?. $