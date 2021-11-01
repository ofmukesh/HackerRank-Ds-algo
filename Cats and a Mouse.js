function catAndMouse(x, y, z) {
    var a = z - x;
    var b = z - y;
    if(a<0){
        a = -(a)
    }
    if(b<0){
        b = -(b)
    }
    if (a < b) {
        return "Cat A"
    }
    else if (a > b) {
        return "Cat B"
    }else{
        return "Mouse C"        
    }
}
