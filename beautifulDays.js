function beautifulDays(i, j, k) {
    var count = 0
    for (var i = i; i <= j; i++) {
        var reversei = i.toString().split('').reverse().join('')
        if (i > reversei) {
            var def = i - reversei
        } else {
            var def = reversei - i
        }
        var d = def / k
        var newD = parseInt(d)
        var r = d - newD
        if (r == .5) { } else if (r % 1 == 0) {
            count++
        }
    }
    return count
}
