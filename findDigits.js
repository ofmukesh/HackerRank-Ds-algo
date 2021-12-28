
function findDigits(n) {
    // Write your code here
    n = n.toString()
    var count = 0
    for (var i = 0; i < n.length; i++) {
        if (n[i] == 1) {
            count++
        }else if(n[i]==0){
            
        }else{
            if(n%n[i]==0){
                count++
            }
        }
    }
    return count
}
