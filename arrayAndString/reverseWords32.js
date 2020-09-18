/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function (s) {
    if (!s || !s.length || s.length === 1 && s !== ' ') return s
    if (s === ' ') return ''

    return s
        .split(' ')
        .filter(x => x)
        .map(x => x.split('').reverse().join(''))
        .join(' ')
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');

    expect(reverseWords()/*?*/, undefined) //?. $
    expect(reverseWords('a')/*?*/, 'a') //?. $
    expect(reverseWords('ab')/*?*/, 'ba') //?. $
    expect(reverseWords('abc')/*?*/, 'cba')
    expect(reverseWords('   ')/*?*/, '') //?. $
    expect(reverseWords('  abc')/*?*/, 'cba') //?. $
    expect(reverseWords('   Let\'s   take LeetCode contest   ')/*?*/, 's\'teL ekat edoCteeL tsetnoc') //?. $
}