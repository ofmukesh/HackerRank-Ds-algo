
function hurdleRace(k, height) {
    var max = Math.max(...height)
    if (k > max) {
        return 0;
    } else {
        var ans = max-k
        return ans
    }
}
