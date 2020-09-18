/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = []
    for (let i = 0; i <= rowIndex; i++)
        row[i] = f(rowIndex + 1, i + 1)
    return row
};

function f(i, j) {
    return j !== 1 && i !== j 
        ? f(i - 1, j - 1) + f(i - 1, j)
        : 1
}

const test = true

if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(getRow(3)/*?*/, [1,3,3,1])
    // expect(!!getRow(30)/*?*/, true)  //?. $
}