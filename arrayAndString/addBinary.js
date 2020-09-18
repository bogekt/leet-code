/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b, debug) {
    if (!b) return a

    const result = []
    let acc = 0
    let sum = 0
    const diff = Math.abs(a.length - b.length);
    const value = (s, i, d) => i - d >= 0 && s.length > i - d ? +s[i - d] : 0;

    for (let i = Math.max(a.length, b.length) - 1; i >= 0; i--) {
        const aValue = a.length >= b.length ? +a[i] : value(a, i, diff)
        const bValue = b.length >= a.length ? +b[i] : value(b, i, diff)
        debug && console.log(`i=${i}, a=${aValue}, b=${bValue}, acc=${acc}`)

        if (aValue === 1 && bValue === 1) {
            sum = acc
            acc = 1
        } else {
            sum = aValue + bValue

            if (acc === 1) {
                if (sum === 1) sum = 0
                else {
                    sum = acc
                    acc = 0
                }
            }
        }

        result.unshift(sum)
        debug && console.log(`sum=${sum},result=${result}`)
    }

    debug && console.log(`acc=${acc}`)
    acc === 1 && result.unshift(acc);

    return result.join('');
};

console.log(addBinary('0'))
console.log(addBinary('0',''))
console.log(addBinary('0','0', true))
console.log(addBinary('0','1'))
console.log(addBinary('1','0'))
console.log(addBinary('1','1'))
console.log(addBinary('0','10'))
console.log(addBinary('01','10'))
console.log(addBinary('10','0'))
console.log(addBinary('10','01'))
console.log(addBinary('11','11'))
console.log(addBinary('11','111'))
console.log(addBinary('11','1111'))
console.log(addBinary('1010', '1011'))
console.log(addBinary('11', '1', 1))

// 3 -> 1
// 2 -> 0
// 1 -> -
// 0 -> -