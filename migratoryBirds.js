
function migratoryBirds(arr) {
    var counts = [];
    for (var i = 1; i <= 5; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                count++
            }
        }
        counts.push(count)
    }
    var maxArray = [];
    var max = Math.max(...counts);
    for(var k = 0 ; k < counts.length ; k++){
        if(counts[k]==max){
            maxArray.push(k+1)
        }
    }
    var min =  Math.min(...maxArray)
    return min;
}
