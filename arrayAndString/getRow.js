/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return   [1]
    if (rowIndex === 1) return  [1, 1]
    if (rowIndex === 2) return [1, 2, 1]

    let i = 2
    let rowLeftPart = [1, 2]

    do {
        let j = 1
        const row = [1]
        // fill left part, skipping first 1
        while (j < Math.round(i / 2))
            row.push(rowLeftPart[j - 1] + rowLeftPart[j]), j++
        // for odd length push in the middle dobled prev middle value
        if (!(i % 2)) row.push(rowLeftPart[j - 1] * 2)
    
        rowLeftPart = row
    } while (i++ < rowIndex)

    // symmetric copy left part as right
    i = rowLeftPart.length - (!(rowIndex % 2) ? 1 : 0)
    while (i--)
        rowLeftPart.push(rowLeftPart[i])

    return rowLeftPart
}

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))
console.log(getRow(6))
console.log(getRow(7))
console.log(getRow(8))
console.log(getRow(9))