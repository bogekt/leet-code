/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return x**n
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(myPow(2, 3)/*?*/, 8) //?. $
    expect(myPow(2, -2)/*?*/, 0.25) //?. $
    expect(myPow(3, 3)/*?*/, 27) //?. $
    expect(myPow(2, 10)/*?*/, 1024) //?. $
    expect(myPow(0.00001, 2147483647)/*?*/, 0) //?. $
    expect(myPow(-1.00000, -2147483648)/*?*/, 1) //?. $
}