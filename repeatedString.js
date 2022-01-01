
function repeatedString(s, n) {
    if (s.length == 1 && s == "a") {
        var result = n
    } else if (s.length == 1 && s != "a") {
        var result = 0
    }else{
        var ains = 0
        var total = s.length
        for(var i = 0 ; i < s.length ; i++){
            if(s[i]=="a"){
                ains++
            }
        }
        var d = parseInt(n/total)
        var result = d*ains
        var left = n-total*d
        for(var i = 0 ; i < left ; i++){
            if(s[i]=="a"){
                result++
            }
        }
    }
    return result
}
