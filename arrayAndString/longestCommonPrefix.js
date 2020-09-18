/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs, debug) {
    if (!strs || !strs.length) return ''
    if (strs.length === 1) return strs[0]

    let left = 0
    let right = Math.min(...strs.map(x => x.length))
    let result = ''

    while (left < right) {
        debug && console.log(`left=${left}, right=${right}, result=${result}`)
        const middle = left + Math.round((right - left)/2)
        const prefix = strs[0].substr(0, middle)

        if (strs.every(x => x.startsWith(prefix))) {
            left = middle
            result = prefix
        } else right = middle - 1
    }

    return result
};

const { expect } = require('../utils.js');
expect(longestCommonPrefix()/*?*/, '') //?. $
expect(longestCommonPrefix(['a'])/*?*/, 'a') //?. $
expect(longestCommonPrefix(['abc'])/*?*/, 'abc') //?. $
expect(longestCommonPrefix(['a', 'a'])/*?*/, 'a') //?. $
expect(longestCommonPrefix(['a', 'ab'])/*?*/, 'a') //?. $
expect(longestCommonPrefix(['ab', 'b'], true)/*?*/, '') //?. $
expect(longestCommonPrefix(['abcde', 'abc', 'abcde'])/*?*/, 'abc') //?. $
expect(longestCommonPrefix(['abc123', 'abc456', 'abc789'])/*?*/, 'abc') //?. $