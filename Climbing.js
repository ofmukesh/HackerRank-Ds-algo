
function climbingLeaderboard(ranked, player) {
    var count = 0;
    var rank = [];
    var newrRank = [];
    var center = parseInt(ranked.length / 2);
    var value = ranked[center];
    for (var i = 0; i < ranked.length; i++) {
        if (i == 0) {
            count++;
            rank.push(count);
        } else if (ranked[i] == ranked[i - 1]) {
            rank.push(count);
        } else if (ranked[i - 1] > ranked[i]) {
            count++;
            rank.push(count);
        }
    }
    for (var j = 0; j < player.length; j++) {
        if (player[j] < ranked[ranked.length - 1]) {
            var no = true;
        } else {
            if (player[j] >= value) {
                for (var k = 0; k <= center; k++) {
                    if (player[j] >= ranked[k]) {
                        var no = false;
                        newrRank.push(rank[k]);
                        break;
                    } else {
                        var no = true;
                    }
                }
                if (no == true) {
                    count++;
                    newrRank.push(count);
                }
            } else {
                for (var k = center + 1; k < ranked.length; k++) {
                    if (player[j] >= ranked[k]) {
                        var no = false;
                        newrRank.push(rank[k]);
                        break;
                    } else {
                        var no = true;
                    }
                }
                if (no == true) {
                    count++;
                    newrRank.push(count);
                }
            }
        }
        if (no == true) {
            var count2=rank[rank.length-1]+1;
            newrRank.push(count2);
        }
    }
    return newrRank;
}
