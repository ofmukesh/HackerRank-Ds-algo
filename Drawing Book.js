function pageCount(n, p) {
    var r = Math.min(parseInt(p / 2), parseInt(n / 2) - parseInt(p / 2))
    return r
}
