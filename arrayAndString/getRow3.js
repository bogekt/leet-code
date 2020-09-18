/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const row = new Uint32Array(rowIndex + 1)
    row[0] = row[1] = 1 // [1,1,0,...,0] without 0s is [1,1], which is the same, as row 2
    for (let i = 2; i <= rowIndex; i++)
        for (let j = i; j > 0; j--)
            row[j] += row[j - 1]

    return row
}

const test = true
if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(getRow(0)/*?*/, [1]) //?. $
    expect(getRow(1)/*?*/, [1, 1]) //?. $
    expect(getRow(2)/*? */, [1, 2, 1]) //?. $
    expect(getRow(3)/*? Array.from($) */, [1, 3, 3, 1]) //?. $
    expect(getRow(4)/*? Array.from($) */, [1, 4, 6, 4, 1]) //?. $
    expect(getRow(5)/*? Array.from($) */, [1, 5, 10, 10, 5, 1]) //?. $
    expect(getRow(6)/*? Array.from($) */, [1, 6, 15, 20, 15, 6, 1]) //?. $
    expect(getRow(7)/*? Array.from($) */, [1, 7, 21, 35, 35, 21, 7, 1]) //?. $
    expect(getRow(8)/*? Array.from($) */, [1, 8, 28, 56, 70, 56, 28, 8, 1]) //?. $
    expect(getRow(9)/*? Array.from($) */, [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]) //?. $
    memory(() => expect(!!getRow(30)/*?*/, true), true) //?. $
    memory(() => expect(!!getRow(40)/*?*/, true), true) //?. $
    memory(() => expect(!!getRow(100)/*?*/, true), true) //?. $
}