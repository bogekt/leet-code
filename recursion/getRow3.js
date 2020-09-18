/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const f = [[1]]
    
    for (let i = 1; i <= rowIndex; i++) {
        f[i] = []
        f[i][0] = f[i][i] = 1
        for (let j = 1; j < i; j++)
            f[i][j] = f[i - 1][j - 1] + f[i - 1][j]
        delete f[i - 1]
    }

    return f[f.length - 1]
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(getRow(3)/*?*/, [1,3,3,1])
    expect(getRow(4)/*?*/, [1,4,6,4,1])
    memory(() => expect(!!getRow(30)/*?*/, true), true) //?. $
    memory(() => expect(!!getRow(40)/*?*/, true), true) //?. $
}