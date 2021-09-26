
function rotateLeft(d, arr) {
    for(var i = 0 ; i < d ; i++){
        for(var j = 0 ; j < 1 ; j++){
            var save = arr[j];
            arr.splice(j,1)
            arr.push(save);
        }
    }
return  arr;
}
