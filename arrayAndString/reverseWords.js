/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function (s) {
    if (!s || !s.length || s.length === 1 && s !== ' ') return s
    if (s === ' ') return ''

    let a = s.split(' ').filter(x => x)

    return a.reverse().join(' ')
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');

    expect(reverseWords()/*?*/, undefined) //?. $
    expect(reverseWords('a')/*?*/, 'a') //?. $
    expect(reverseWords('ab')/*?*/, 'ab') //?. $
    expect(reverseWords('abc')/*?*/, 'abc')
    expect(reverseWords('   ')/*?*/, '') //?. $
    expect(reverseWords('  abc')/*?*/, 'abc') //?. $
    expect(reverseWords('the sky is blue')/*?*/, 'blue is sky the') //?. $
    expect(reverseWords('  hello world!  ')/*?*/, 'world! hello') //?. $
    expect(reverseWords('a good   example')/*?*/, 'example good a') //?. $
    expect(reverseWords('  hello   world! 2   ')/*?*/, '2 world! hello') //?. $
}