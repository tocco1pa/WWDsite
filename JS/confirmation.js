var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    var resultsDisplay = "<h2>Customer Information</h2><br>";
    resultsDisplay += "<p>Registration date: " + sessionStorage.date + "<br>";
    resultsDisplay += "Customer name: " + sessionStorage.fname + " " + sessionStorage.lname + "<br>";
    resultsDisplay += "Email address: " + sessionStorage.email + "<br>";
    resultsDisplay += "Phone number: " + sessionStorage.phone + "<br>";
    resultsDisplay += "State: " + sessionStorage.state + "<br>";
    resultsDisplay += "Zip code: " + sessionStorage.zip + "<br>";
    resultsDisplay += "Customer type: " + sessionStorage.customerType + "<br>";

    $("info").innerHTML = resultsDisplay;
}