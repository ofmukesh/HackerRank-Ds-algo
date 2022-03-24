function pickingNumbers(a) {
    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler
    var l = 0
    for (var i = 0; i < a.length; i++) {
        var no = a[i];
        var arr2 = [];
        for (var j = 0; j < a.length; j++) {
            if (no == a[j]) {
                arr2.push(a[j])
            } else if (no < a[j]) {
                if ( a[j]-no <= 1) {
                    arr2.push(a[j])
                }
            }
        }
        l = Math.max(l, arr2.length)
    }
    return l
}
