
function birthday(s, d, m) {
    var result =0;
    if(m==1){
        for(var i = 0;i<s.length;i++){
            if(s[i]==d){
                result = 1;
            }else{
                result = 0;
            }
        }
    }else{
        for(var i = 0;i<s.length;i++){
            var sum = 0;
            for(var j = 0;j<m;j++){
                sum += s[i+j];
            }
            if(sum==d){
                result++
            }
        }
    }
    return result;
}
