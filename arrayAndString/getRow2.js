/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return   [1]
    if (rowIndex === 1) return  [1, 1]
    if (rowIndex === 2) return [1, 2, 1]

    const row = new Uint32Array(rowIndex + 1)
    row[0] = row[rowIndex] = 1
    row[1] = 2
    // fill left part only
    for (let i = 2; i < rowIndex; i++) {
        let j = 1
        let temp = row[j - 1]

        do {
            let temp2 = row[j]
            row[j] = row[rowIndex - j] = temp + temp2
            temp = temp2
        } while (j++ < Math.round(i / 2))

        if (i % 2) 
            row[Math.round(i / 2)] = 2 * row[Math.round(i / 2)] 
    }

    return row
}

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../utils.js');
    expect(getRow(0)/*?*/, [1]) //?. $
    expect(getRow(1)/*?*/, [1, 1]) //?. $
    expect(getRow(2)/*? */, [1, 2, 1]) //?. $
    expect(getRow(3)/*? Array.from($) */, [1,3, 3, 1]) //?. $
    expect(getRow(4)/*? Array.from($) */, [1, 4, 6, 4, 1]) //?. $
    expect(getRow(5)/*? Array.from($) */, [1, 5, 10, 10, 5, 1]) //?. $
    expect(getRow(6)/*? Array.from($) */, [1, 6, 15, 20, 15, 6, 1]) //?. $
    expect(getRow(7)/*? Array.from($) */, [1, 7, 21, 35, 35, 21, 7, 1]) //?. $
    expect(getRow(8)/*? Array.from($) */, [1, 8, 28, 56, 70, 56, 28, 8, 1]) //?. $
    expect(getRow(9)/*? Array.from($) */, [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]) //?. $ $
}