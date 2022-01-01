function datafinder(data,minRange,maxRange,value){
    if(maxRange<=data.length){
        for(var i = minRange ; i<=maxRange;i++){
            if(data[i]==value){
                var result = true;
                break;
            }else{
                var result = false;
            }
        }
    }else{
        var result = "Error: Invalid range"
    }
    console.log(result)
}
