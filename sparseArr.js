
function matchingStrings(strings, queries) {
    // Write your code here
    var n1= strings.length;
    var n2= queries.length;
    var arr = [];
    var count=0;
    for(var i = 0 ; i < n2 ; i++){
        count = 0;
        for(var j = 0 ; j < n1 ; j++){
            if(queries[i]== strings[j]){
                count++;
            }
        }
        arr.push(count);
    }
    return arr;
}
