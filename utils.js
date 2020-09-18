export function log(value) {
    console.log(value);

    return value;
}

export function expect(a, b) {
    if (
        (Array.isArray(a) || ArrayBuffer.isView(a)) && (Array.isArray(b) || ArrayBuffer.isView(a))
        ? !(
            a.length === b.length
            &&
            JSON.stringify(Array.from(a).flat(Infinity))==JSON.stringify(Array.from(b).flat(Infinity))
        )
        : a !== b
    ) {
        const wrapString = s => typeof s === 'string' ? `'${s}'` : s
        throw new Error(`a=${wrapString(a)}, b=${wrapString(b)}`);
    }

    return true
}

export function memory(f, verbose) {
    const before = process.memoryUsage()
    const result = f()
    const after = process.memoryUsage()

    if (verbose) console.log('before', before), console.log('after', after)
    console.log('heapUsed', after.heapUsed - before.heapUsed)
    
    return result
}