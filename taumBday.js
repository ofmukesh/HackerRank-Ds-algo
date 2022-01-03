function taumBday(b, w, bc, wc, z) {
   var costB = b * bc
    var costW = w * wc
    var total = costB + costW
    var total2 = b*bc+w*(bc+z)
    var total3 =  w*wc+b*(wc+z)
    return Math.min(total, total2, total3)
}
