function insertionSort1(n, arr) {
    n = n - 1
    if (arr[n] >= arr[n - 1]) {
        console.log(arr.join(" "))
    }else {
        var e = arr[n]
        for (var i = n - 1; i >= -1; i--) {
            if (e < arr[i]) {
                arr[i + 1] = arr[i]
                console.log(arr.join(" "))
            } else {
                arr[i + 1] = e
                console.log(arr.join(" "))
                break
            }
        }
    }
}
