var arr = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                var r = j - i
                arr.push(r)
                break
            }
        }
    }
    if (arr.length == 0) {
        return -1
    } else {
        return Math.min(...arr)
    }
