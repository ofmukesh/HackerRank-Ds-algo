
function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for(var i = 0 ; i < n ; i++){
        for(var j = 0;j<n; j++){
            for(var K=1;K*k<100000; K++){
            if(ar[i]+ar[j]==k*K && i<j){
                count++;
                break;
            }
        }
        }
    }
    return count;
}
