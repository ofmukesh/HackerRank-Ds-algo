function taumBday(b, w, bc, wc, z) {
    if (b == w & wc == 1 & bc == 1) {
        return b * bc + w * wc
    }
    else if (b < w && bc < wc) {
        return b * bc + w * wc
    } else {
        var costB = b * bc
        var costW = w * wc
        var costBtoW = b * z
        var costWtoB = b * z
        var newWhite = b * wc
        var newBlack = w * bc
        var total = newWhite + costBtoW + costW
        var total2 = newBlack + costWtoB + costB
        if (total < costB + costW) {
            return total
        }
        else if(total2 < costB + costW) {
            return total2
        }else {
            return costB + costW
        }
    }
}
