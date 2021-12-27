
function designerPdfViewer(h, word) {
    var ABCD = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var arr = []
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < ABCD.length; j++) {
            if (word[i] == ABCD[j]) {
                var values = h[j]
                arr.push(values)
                break
            }
        }
    }
    var ans = Math.max(...arr)*word.length
    return ans
}
