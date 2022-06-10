"use strict";
var $ = function (id) { return document.getElementById(id); };

var saveReservation = function () {
    // submit form
    if (reqFields() == true) {
        sessionStorage.date = $("date").value;
        sessionStorage.fname = $("fname").value;
        sessionStorage.lname = $("lname").value;
        sessionStorage.email = $("email").value;
        sessionStorage.phone = $("phone").value;
        sessionStorage.state = $("state").value;
        sessionStorage.zip = $("zip").value;

        if ($("business").checked) {
            sessionStorage.customerType = "Business";
        } else if ($("personal").checked) {
            sessionStorage.customerType = "Personal";
        } else if ($("gov").checked) {
            sessionStorage.customerType = "Government";
        }

        $("reservation_form").submit();
    }

};

var reqFields = function () {
    var date_regex = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;
    var name_regex = /^[a-zA-Z]{2,30}$/;
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var phone_regex = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/g;
    var state_regex = /^[A-Z]{2}$/g;
    var zip_regex = /^[0-9]{5}$/g;

    if ($("date").value == "" || date_regex.test($("date").value) == false) {
        $("date_message").innerHTML = "Please enter a valid date in the format XX/XX/XXXX.";
        return false;
    } else {
        $("date_message").innerHTML = "*";
    }
    if ($("fname").value == "" || name_regex.test($("fname").value) == false) {
        $("fname_message").innerHTML = "Please enter a valid first name.";
        return false;
    } else {
        $("fname_message").innerHTML = "*";
    }
    if ($("lname").value == "" || name_regex.test($("lname").value) == false) {
        $("lname_message").innerHTML = "Please enter a valid last name.";
        return false;
    } else {
        $("lname_message").innerHTML = "*";
    }
    if ($("email").value == "" || email_regex.test($("email").value) == false) {
        $("email_message").innerHTML = "Please enter a valid email.";
        return false;
    } else {
        $("email_message").innerHTML = "*";
    }
    if ($("confirm_email").value == "" || email_regex.test($("email").value) == false || $("email").value != $("confirm_email").value) {
        $("confirm_email_message").innerHTML = "Please enter a valid email confirmation.";
        return false;
    } else {
        $("confirm_email_message").innerHTML = "*";
    }
    if ($("phone").value == "" || phone_regex.test($("phone").value) == false) {
        $("phone_message").innerHTML = "Please enter a valid phone number in the format XXX-XXX-XXXX.";
        return false;
    } else {
        $("phone_message").innerHTML = "*";
    }
    if ($("state").value == "" || state_regex.test($("state").value) == false) {
        $("state_message").innerHTML = "Please enter a valid two character state code.";
        return false;
    } else {
        $("state_message").innerHTML = "*";
    }
    if ($("zip").value == "" || zip_regex.test($("zip").value) == false) {
        $("zip_message").innerHTML = "Please enter a valid 5 digit zip code.";
        return false;
    } else {
        $("zip_message").innerHTML = "*";
    }
    return true;
}

window.onload = function () {
    $("submit_request").onclick = saveReservation;
    $("date").focus();
};