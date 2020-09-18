/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (!b) return a

    let result = ''
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0 || carry > 0) {
        if (i >= 0) carry += parseInt(a[i--])
        if (j >= 0) carry += parseInt(b[j--])

        result = `${carry % 2}${result}`
        carry = Math.floor(carry / 2)
    }

    return result
};

console.log(addBinary('0'))
console.log(addBinary('0',''))

console.log(addBinary('0','0'))
console.log(addBinary('0','1'))
console.log(addBinary('1','0'))
console.log(addBinary('1','1', 1))

console.log(addBinary('0','10'))
console.log(addBinary('01','10'))
console.log(addBinary('10','0'))
console.log(addBinary('10','01'))

console.log(addBinary('11','11'))
console.log(addBinary('11','111'))
console.log(addBinary('11','1111'))
console.log(addBinary('1010', '1011'))

// 3 -> 1
// 2 -> 0
// 1 -> -
// 0 -> -