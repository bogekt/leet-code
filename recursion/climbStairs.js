/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 1;
    const f = factorials(n - 1);
    for (let i = 1; i <= Math.trunc(n/2); i++)
        result += f[n - i]/(f[n - i*2]*f[i])
    return result
};

function factorials(n) {
    const result = [1, 1]
    for (let i = 2; i <= n; i++)
        result[i]= i*result[i - 1]
    return result
}

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