function howManyGames(p, d, m, s) {
    var count = 0
    for (var i = 0; s>=p; i++) {
        count++;
        s -= p;
        p = Math.max(p - d, m);
    }
    return count 
}
