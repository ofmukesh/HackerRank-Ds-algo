
function countingSort(arr) {
    // Write your code here
    var ans=[];
    var count = 0;
    
    for(var i = 0 ; i < 100 ;i++){
        count = 0;
        for(var j = 0 ; j<50;j++){
            if(arr[j]==i){
                count++
            }
        }
        for(var j = 50 ; j<arr.length;j++){
            if(arr[j]==i){
                count++
            }
        }
        ans.push(count)
    }
    return ans
}

