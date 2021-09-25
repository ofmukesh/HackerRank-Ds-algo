
function hourglassSum(arr) {
    var list =[];
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var top= arr[i][j]+arr[i][j+1]+arr[i][j+2];
            var center=  arr[i+1][j+1];
            var bottom = arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            var sum = top+center+bottom;
            list.push(sum);
        }
    }
    var max = Math.max(...list);
    return max;
}
