function countingValleys(steps, path) {
    var step = 0;
    var prevC = 0;
    var count = 0;
    for (var i = 0; i < steps; i++) {
        if (path[i] == "U") {
            step++
        }
        if (path[i] == "D") {
            step--
        }

        if (prevC == 0 && step == -1) {
            count++
        }
        if (step == 0) {
            prevC = 0
        } else {
            prevC = 1;
        }
    }

    return count
}
