
function caesarCipher(s, k) {
    var abcd = "abcdefghijklmnopqrstuvwxyz";
    var ABCD = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
    if (k > 26) {
        k = k % 26
    }
    var rABCD = abcd.slice(k, 26) + abcd.slice(0, k)
    var ans = ""
    for (var i = 0; i < s.length; i++) {
        var index = abcd.indexOf(s[i].toLowerCase())
        if (index != -1) {
            if (s[i] == ABCD[index]) {
                ans += rABCD[index].toUpperCase()
            } else {
                ans += rABCD[index]
            }
        }
        else {
            ans += s[i]
        }
    }
    return ans
}
