
function getTotalX(a, b) {
    var unkwNum =[];
    var result = [];
    var start = a[a.length-1];
    var end = b[0];
    var ans = 0;
    var sol = [];
    var sol2 = [];
    for(var i = 1;i<=100;i++){
        if(ans<end){
            ans = start*i
            unkwNum.push(ans)
        }else{
            break
        }
    }
    for(var j = 0;j<unkwNum.length;j++){
        for(var k = 0 ; k< a.length;k++){
            if(unkwNum[j]%a[k]==0){
                sol = true
            }else{
                sol = false
                break;
            }
        }
        for(var k = 0 ; k< b.length;k++){
            if(b[k]%unkwNum[j]==0){
                sol2 = true
            }else{
                sol2 = false
                break;
            }
        }
        if(sol==true&&sol2==true){
            result.push(unkwNum[j])
        }
    }
    
    return result.length
}
