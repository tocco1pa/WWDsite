var users = ["admin", "tocco1pa"];
var passwords = ["P@ssw0rd", "WWDsupport"];

var $ = function (id) { return document.getElementById(id); };


var checkFields = function () {
    var user_valid = false;
    var pass_valid = false;

    for (let i = 0; i < users.length; i++) {
        if($("user").value == users[i]) {
            user_valid = true;
        }
    }
    for (let i = 0; i < passwords.length; i++) {
        if($("pass").value == passwords[i]) {
            pass_valid = true;
        }
    }
    if(user_valid != true) {
        $("user_message").innerHTML = "Please enter a valid username.";
    } else {
        $("user_message").innerHTML = "*";

    }
    if(pass_valid != true) {
        $("pass_message").innerHTML = "Please enter a valid password.";
    } else {
        $("pass_message").innerHTML = "*";

    }
    if(user_valid == true && pass_valid == true) {
        openAdmin();
    }
}

var addData = function () {
    if($("data_set").value == "products") {
        sessionStorage.addName = $("product_name").value;
        sessionStorage.addPrice = $("product_price").value;
        sessionStorage.addQty = $("product_qty").value;

        $("add_message").innerHTML = "Products updated! visit the Order page to view changes.";
    }
    if($("data_set").value == "coupons") {
        sessionStorage.addCoupon = $("coupon_code").value;
        sessionStorage.addPercent = $("coupon_percent").value;

        $("add_message").innerHTML = "Coupons updated! visit the Order page to view changes.";
    }
}

var productEdit = function () {
    var formDisplay = " <fieldset><legend>Add to the database</legend>";
    formDisplay += "<label>Product Name: </label><input type='text' id='product_name'><br>";
    formDisplay += "<label>Product Price: </label><input type='text' id='product_price'><br>";
    formDisplay += "<label>Product Quantity: </label><input type='text' id='product_qty'><br>";
    formDisplay += "<input type='button' id='add' value='Add'><span id='add_message'></span><br>";
    formDisplay += "</fieldset>";
    $("data_form").innerHTML = formDisplay;
    $("add").onclick = addData;
}

var couponEdit = function () {
    var formDisplay = " <fieldset><legend>Add to the database</legend>";
    formDisplay += "<label>Coupon Code: </label><input type='text' id='coupon_code'><br>";
    formDisplay += "<label>Discount Percentage: </label><input type='text' id='coupon_percent'><br>";
    formDisplay += "<input type='button' id='add' value='Add'><span id='add_message'></span><br>";
    formDisplay += "</fieldset>";
    $("data_form").innerHTML = formDisplay;
    $("add").onclick = addData;
}

var openAdmin = function () {
    $("admin_form").style.display = "block";
}

var openData = function () {
    $("data_form").style.display = "block";
    if($("data_set").value == "products") {
        productEdit();
    }
    if($("data_set").value == "coupons") {
        couponEdit();
    }
}
window.onload = function() {
    $("admin_form").style.display = "none";
    $("data_form").style.display = "none";
    $("select").onclick = openData;
    $("login").onclick = checkFields;
    $("user").focus();
};