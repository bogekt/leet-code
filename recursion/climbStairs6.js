/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1
    let b = 2

    for (let i = 3; i <= n; i++)
        [a, b] = [b, a + b]

    return b

};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(climbStairs(2)/*?*/, 2) //?. $
    expect(climbStairs(3)/*?*/, 3) //?. $
    expect(climbStairs(4)/*?*/, 5) //?. $
    expect(climbStairs(5)/*?*/, 8) //?. $
    expect(climbStairs(6)/*?*/, 13) //?. $
    expect(climbStairs(7)/*?*/, 21) //?. $
    memory(() => expect(!!climbStairs(45)/*?*/, true), true) //?. $
}
