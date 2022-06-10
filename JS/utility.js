var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

var generatePassword = function() {
    $("password").value = ""; // clear previous entry
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
    var password = "";
    var entry = $("num").value;
    if(isNaN(entry)) {
        $("num_message").innerHTML = "Please enter a valid number.";
    } else {
        $("num_message").innerHTML = "*";
        for (let i = 0; i < entry; i++) {
            password += chars.charAt(getRandomNumber(67) - 1);
        }
        $("password").value = password;
    }
};

var clearFields = function() {
    $("num").value = "";
    $("password").value = "";
    $("num").focus();
};

window.onload = function() {
    $("generate").onclick = generatePassword;
    $("clear").onclick = clearFields;
    $("num").focus();
};