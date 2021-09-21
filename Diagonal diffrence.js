
function diagonalDifference(arr) {
    // Write your code here
    var sum1 = 0 ;
    var sum2 = 0 ;
    for(var i = 0 ; i < arr.length;i++){
        for(var j = 0 ; j < arr.length;j++){
            if(i==j){
                sum1 += arr[i][j];
            }
        }
        for(var j = arr.length-1 ; j >= 0;j--){
            if(j==arr.length-1-i){
                sum2 += arr[i][j]
            }
        }
    }
    if(sum1>sum2){
        var sum = sum1-sum2;
    }else{
        var sum = sum2-sum1;
    }
    return sum;

}
