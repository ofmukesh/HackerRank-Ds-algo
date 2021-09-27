
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var aPonits = [];
    var oPoints = [];
    var count1=0;
    var count2=0;
    for(var i = 0 ; i <= apples.length ; i++){
        var sum1 = a+apples[i];
            if(sum1>=s && sum1<=t){
                count1++;
        }
    }
    for(var i = 0 ; i <= oranges.length ; i++){
        var sum2 = b+oranges[i];
            if(sum2>=s && sum2<=t){
                count2++;
            }
    }
    console.log(count1)
    console.log(count2)
}
