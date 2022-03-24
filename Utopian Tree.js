function utopianTree(n) {
    var i = 1
    for (var number = 1; number <= n; number++) {
        if (number % 2 == 0) {
            i += 1
        } else {
            i *= 2
        }
    }
    return i
}
