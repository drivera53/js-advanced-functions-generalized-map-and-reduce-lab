// Add your functions here
function map(source, callback) {
    const r = []
    for (let i = 0; i < source.length; i++) {
        const theElement = source[i]
        r.push(callback(theElement))
    }
    return r
}

function reduce(source, callback, startingValue) {
    let total
    if (startingValue) {
        total = startingValue
        for (let i = 0; i < source.length; i++) {
            total = callback(source[i], total);
        }
        return total
    } else {
        total = source [0]
        for (let i = 1; i < source.length; i++) {
            total = callback(source[i], total)
        }
        return total
    }
}