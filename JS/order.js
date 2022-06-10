var item = ["Mouse", "Keyboard", "Monitor", "Desk", "Chair", "Headset", "Mousepad", "Microphone", "Desktop"];
var price = [20, 30, 100, 125, 150, 30, 10, 20, 250];
var qty = [70, 60, 50, 50, 50, 45, 80, 25, 50];
var cart = []

if(sessionStorage.addName != null) {
    item.push(sessionStorage.addName);
    price.push(sessionStorage.addPrice);
    qty.push(sessionStorage.addQty);

}


var $ = function (id) { return document.getElementById(id); };

var originalTable = function() {
    var tableDisplay = "<h2>Order Form</h2>";
    tableDisplay += "<tr><th><b>Item</b></th><th><b>Price</b></th><th><b>Quantity</b></th></tr>";
    for (let i = 0; i < item.length; i++) {
        tableDisplay +="<tr><td>" + item[i] + "</td><td>$" + price[i] + "</td><td>" + 
        "<input type='number' id='" + item[i] + "_qty' class='qty_input' min='0' max='" + qty[i] + "' value='0'>" + "</td></tr>";
	}
    $("order_table").innerHTML = tableDisplay;
}

var placeOrder = function() {
    var total = 0;
    var sum = "<h2>Order Summary</h2><br>"

    for (let i = 0; i < item.length; i++) {
        var id = "";
        id += item[i] + '_qty';
        if(parseInt($(id).value) > 0) {
            total += parseInt($(id).value * price[i]);
            cart.push(item[i] + " x" + $(id).value);
        }
    }
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i] + "<br>";
    }
    sessionStorage.summary = sum;
    sum += "total: $" + total;
    sum += "<br>Everything look good? click <a href='invoice.html'>here</a> to confirm."
    $("order_summary").innerHTML = sum;
    sessionStorage.subtotal = total;
    
}

window.onload = function () {
    originalTable();
}
