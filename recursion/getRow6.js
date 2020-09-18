/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = []
    row[0] = row[rowIndex] = 1

    for (let i = 1; i <= Math.ceil(rowIndex/2); i++)
        // NCr   = N! / r! (N-r)!       -> 1
        // NCr-1 = N! / (r-1)! (N-r+1)! -> 2
        // divide 1 and 2
        // NCr   = NCr-1 * (N-r+1) / r;
        row[rowIndex - i] = row[i] = row[i - 1] * (rowIndex - i + 1)/i

    return row
};

const test = true

if (typeof test === 'boolean' && test) {
    const { expect, memory } = require('../utils.js');
    expect(getRow(3)/*?*/, [1,3,3,1])
    expect(getRow(4)/*?*/, [1,4,6,4,1])
    memory(() => expect(!!getRow(30)/*?*/, true), true) //?. 
    memory(() => expect(!!getRow(40)/*?*/, true), true) //?. $
    memory(() => expect(!!getRow(100)/*?*/, true), true) //?. $
}