
function breakingRecords(scores) {
    var maxcount = 0;
    var mincount = 0;
    var lastmax = scores[0];
    var lastmin = scores[0];
    for (var i = 0; i < scores.length; i++) {
        if (lastmax < scores[i]) {
            maxcount++;
            lastmax = scores[i];
        }
    }
    for (var i = 0; i < scores.length; i++) {
        if (lastmin > scores[i]) {
            mincount++;
            lastmin = scores[i];
        }
    }
    return [maxcount,mincount];
}
