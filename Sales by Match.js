
    var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    var arr = []
    var count = 1
    for (var i = 0; i < ar.length; i+=0) {
        var value = ar[i]
        count = 0
        for (var j = 0; j < ar.length; j++) {
            if (value == ar[j]) {
                count++
                ar.splice(j, 1);
                j--
            }
        }
        arr.push(count)
    }
    var sum = 0
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] != 1) {
            var res = parseInt(arr[k]/2)
            sum+=res
        }
    }
    console.log(sum)
