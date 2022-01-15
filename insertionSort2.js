function insertionSort2(n, arr) {
    for (var i = 1; i < n; i++) {
        var a = arr[i];
        for (var j = 0; j < i; j++) {
            if (a < arr[j]) {
                arr.splice(i, 1)
                arr.splice(j, 0, a);
                break
            }
        }
        console.log(arr.join(" "))
    }
}
