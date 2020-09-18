/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    if (x === 1 || x === 0) return x

    const result = myPowTailRecursive(x, Math.abs(n), x)

    return n >= 0 ? result: 1/result
};

var myPowTailRecursive = function(x, n, acc) {
    return n !== 1 
        ? myPowTailRecursive(x, n - 1, acc*x)
        : acc
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(myPow(2, 3)/*?*/, 8) //?. $
    expect(myPow(2, -2)/*?*/, 0.25) //?. $
    expect(myPow(3, 3)/*?*/, 27) //?. $
    expect(myPow(2, 10)/*?*/, 1024) //?. $
    expect(myPow(-1.00000, -2147483648)/*?*/, 1) //?. $
}