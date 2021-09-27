
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // var arr1= [];
    // var arr2 = [];
    
    // for(var i = x1 ; i < 20000000 ; i+=v1){
    //     arr1.push(i)
    // }
    // for(var j = x2 ; j < 20000000 ; j+=v2){
    //     arr2.push(j)
    // }
    // for(var k = 0 ; k < arr2.length ; k++){
    //     if(arr1[k]==arr2[k] && k<arr1.length){
    //          var result = "YES";
    //         break;
    //     }else{
    //         var result = "NO";
    //     }
    // }
    if ((v1 <= v2) || ((x2 - x1) % (v2 - v1))) {
        var result ="NO";
    } else {
        var result ="YES";
    }

    return result;
}
