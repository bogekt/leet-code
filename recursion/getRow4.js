/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const f = factorials(rowIndex)
    const row = []
    row[0] = row[rowIndex] = 1

    for (let i = 1; i < rowIndex; i++)
        row[i] = Math.round(f[rowIndex]/(f[i]*f[rowIndex - i]))

    return row
};

function factorials(n) {
    const result = [1,1]
    for (let i = 2; i <= n; i++)
        result[i]= i*result[i - 1]
    return result
}

function factorial(n, k, value) {
    k = k || 0
    value = value || 1
    while (k++ < n) 
        value = k*value
    return value
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(factorial(3)/*?*/, 6) //?. $
    expect(factorial(6)/*?*/, 720) //?. $
    expect(factorial(6, 5, 120)/*?*/, 720) //?. $
    expect(factorial(6, 4, 24)/*?*/, 720) //?. $
    expect(factorial(6, 3, 6)/*?*/, 720) //?. $
    expect(factorials(6)/*?*/, [1,1,2,6,24,120,720]) //?. $
    expect(getRow(3)/*?*/, [1,3,3,1])
    expect(getRow(4)/*?*/, [1,4,6,4,1])
    memory(() => expect(!!getRow(30)/*?*/, true), true) //?. 
    memory(() => expect(!!getRow(40)/*?*/, true), true) //?. $
    memory(() => expect(!!getRow(100)/*?*/, true), true) //?. $
}