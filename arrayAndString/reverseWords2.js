/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function (s) {
    if (!s || !s.length || s.length === 1 && s !== ' ') return s
    if (s === ' ') return ''
    if (!s.trim()) return ''
    if (s.trim().indexOf(' ') === -1) return s.trim()

    let i = s.trim().indexOf(' ')
    let j = 0
    let a = s.trim().split('')

    while (i !== -1) {
        reverse(a, j, i - 1)

        if (a[i + 1] === ' ') {
            j = i
            while(a[i + 1] === ' ')
                i++
            i -= a.splice(j, i - j).length
        }

        i = a.indexOf(' ', j = i + 1)
    }

    reverse(a, j, a.length - 1)

    return a.reverse().join('')
};

var reverse = function(a, left, right) {
    if (!a || a.length === 0 || a.length === 1) return a

    left = typeof left === 'number' ? left : 0
    right = typeof right === 'number' ? right : (a.length - 1)

    while (left < right) {
        // a = [b, b = a][0]
        [a[left], a[right]] = [a[right], a[left]]
        left++, right--
    }

    return a
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