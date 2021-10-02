var count = 0;
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<a.length;j++){
            if(a[i]==a[j]){
                count++;
            }
        }
        if(count==1){
            var result = a[i];
            break;
        }
        count=0;
   }
   return result;
