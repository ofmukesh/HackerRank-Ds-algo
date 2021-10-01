
function findMedian(arr) {
        var arr2 = [];
        for (var i = -10000; i <= 10000; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (i == arr[j]) {
                    arr2.push(arr[j]);
                }
            }
        }
        var len = arr2.length;
        var m = arr2[parseInt(len/2)];
        return m;
}
