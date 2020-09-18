/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function (s) {
    if (!s || !s.length || s.length === 1 && s !== ' ') return s
    if (s === ' ') return ''

    // trim leading and trailing
    let start = 0
    let end = s.length - 1
    while (s[start] === ' ' || s[end] === ' ') {
        if (s[start] === ' ') start++
        if (s[end] === ' ') end--
        if (start === end) return ''
    }

    // trim middle spaces and reverse words
    let a = s.slice(start, end + 1).split('')
    let length = 0
    let wordLength = 0
    let firstSpace = true

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== ' ') {
            a[length++] = a[i]
            firstSpace = true
            wordLength++
        } else {
            if (firstSpace) {
                wordLength > 1 && reverse(a, length - wordLength, length - 1)
                a[length++] = ' '
            }
            firstSpace = false
            wordLength = 0
        }
    }

    wordLength > 1 && reverse(a, length - wordLength, length - 1)
    
    return a.slice(0, length).join('')
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

    // temp
    expect(reverseWords('   a b   c  d   ')/*?*/, 'a b c d')
    expect(reverseWords('   ab   cde   ')/*?*/, 'ba edc')

    expect(reverseWords()/*?*/, undefined) //?. $
    expect(reverseWords('      ')/*?*/, '') //?. $
    expect(reverseWords('a')/*?*/, 'a') //?. $
    expect(reverseWords('ab')/*?*/, 'ba') //?. $
    expect(reverseWords('abc')/*?*/, 'cba')
    expect(reverseWords('   ')/*?*/, '') //?. $
    expect(reverseWords('  abc')/*?*/, 'cba') //?. $
    expect(reverseWords('   Let\'s   take LeetCode contest   ')/*?*/, 's\'teL ekat edoCteeL tsetnoc') //?. $
}