function runningTime(arr) {
    var n = arr.length
    var count = 0
    for (var i = 0; i < n; i++) {
        var a = arr[i];
        for (var j = 0; j < i; j++) {
            if (a < arr[j]) {
                count++
            }
        }
    }
    return count
}
