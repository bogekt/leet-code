/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(a) {
    if (!a) return a;
    return reverseStringRecursive(a, 0, a.length - 1)
};

function reverseStringRecursive(a, l, r) {
    if (l >= r) return a
    ; [a[l],a[r]] = [a[r], a[l]]
    return a
}

const { expect } = require('../utils.js');
expect(reverseString()/*?*/, undefined) //?. $
expect(reverseString(['a'])/*?*/, ['a']) //?. $
expect(reverseString( ['b','a'])/*?*/, ['a','b']) //?. $
expect(reverseString( ['c', 'b', 'a'])/*?*/,  ['a', 'b', 'c']) //?. $
