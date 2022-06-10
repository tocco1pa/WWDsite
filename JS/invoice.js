var codes = ["CMU10", "F12SPY", "BLACKFRIDAY"];
var codesPercent = [10, 50, 30];
var total = sessionStorage.subtotal;

if(sessionStorage.addCoupon != null) {
    codes.push(sessionStorage.addCoupon);
    codesPercent.push(sessionStorage.addPercent);
}


var $ = function (id) { return document.getElementById(id); };

var couponCode = function() {
    var codeApplied = false;
    for (let i = 0; i < codes.length; i++) {
        if($("coupon_code").value == codes[i]) {
            total = total * (1-(codesPercent[i] * 0.01));
            codeApplied = true;
        }
    }
    if(codeApplied == true) {
        $("code_message").innerHTML = "Coupon code applied!";
        $("order_summary").innerHTML = sessionStorage.summary + "Discount: -$" + (sessionStorage.subtotal - total) + "<br>Total: $" + total;
    } else {
        $("code_message").innerHTML = "Coupon code is not valid.";
    }
}

var confirmOrder = function () {
    var confirmMessage = "";
    confirmMessage += "Order confirmed! We will contact you through email for payment.<br>Print out this page for your records.";
    $("confirmed_order").innerHTML = confirmMessage;
}


window.onload = function () {
    $("order_summary").innerHTML = sessionStorage.summary + "total: $" + sessionStorage.subtotal;
}
