# function taumBday(b, w, bc, wc, z) {
#    var costB = b * bc
#     var costW = w * wc
#     var total = costB + costW
#     var total2 = b*bc+w*(bc+z)
#     var total3 =  w*wc+b*(wc+z)
#     return Math.min(total, total2, total3)
# } its javascript code its working but not multiplying big nums in 11 or 12 case

# it's the ans
def taumBday(b, w, bc, wc, z):
   print(min(b*bc+w*wc, (b+w)*bc+z*w,(b+w)*wc+z*b)))
