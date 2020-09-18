/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1
    let b = 1 + n%2

    for (let k = 0; k < Math.trunc(n/2); k++)
        a += b, b += a

    return a
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    //expect(climbStairs(2)/*?*/, 2) //?. $
    //expect(climbStairs(3)/*?*/, 3) //?. $
    expect(climbStairs(4)/*?*/, 5) //?. $
    expect(climbStairs(5)/*?*/, 8) //?. $
    expect(climbStairs(6)/*?*/, 13) //?. $
    expect(climbStairs(7)/*?*/, 21) //?. $
    memory(() => expect(!!climbStairs(45)/*?*/, true), true) //?. $
}
