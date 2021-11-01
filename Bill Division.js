
function bonAppetit(bill, k, b) {
    // Write your code here
    bill.splice(k, 1);
    var sum = 0;
    for (var i = 0; i < bill.length; i++) {
        sum += bill[i];
    }
    var ans = sum / 2;
    var check=b-ans;
    if (check == 0) {
        console.log("Bon Appetit")
    }
    else {
        console.log(check)
    }
}
