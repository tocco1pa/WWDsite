var item = ["Mouse", "Keyboard", "Monitor", "Desk", "Chair", "Headset", "Mousepad", "Microphone", "Desktop"];
var price = [20, 30, 100, 125, 150, 30, 10, 20, 250];
var qty = [70, 60, 50, 50, 50, 45, 80, 25, 50];
var textArr = ["Razer Naga Mouse", "Kinesis Freestyle Pro", "Dell E1916HV Monitor",
    "Bell'o Computer Desk", "LIKE REGAL WCG Chair", "Analog PC Headset",
    "Custom Allsop Basic Mousepad", "Blue Yeti Microphone", "HP EliteDesk 800 G1 PC" ];
var x = 1;



var $ = function (id) { return document.getElementById(id); };

var originalTable = function() {
    var tableDisplay = "<h2>Inventory</h2>";
    tableDisplay += "<tr><th><b></b></th><th><b>Item</b></th><th><b>Price</b></th><th><b>Quantity</b></th></tr>";
    for (let i = 0; i < item.length; i++) {
        tableDisplay +="<tr><td>" + "<img class = 'td_pic' src='images/" + (i+1) + ".png'>" + "</td><td>" + item[i] +
         "</td><td>" + price[i] + "</td><td>" + qty[i] + "</td></tr>";
	}
    $("inv_table").innerHTML = tableDisplay;
}


function sortName() {
    var rows, i, x, y, shouldSwitch;
    var table = document.getElementById("inv_table");
    var switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
    }
    }
}

function sortPrice() {
    var rows, i, x, y, shouldSwitch;
    var table = document.getElementById("inv_table");
    var switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
    }
    }
}
var back = function() {
	if(x == 1) {
		x = 9;
        var filename = "images/" + (x)+".png";
	} else {
		x--;
		var filename = "images/" + (x)+".png";
	}
    $("viewer").src = filename;
    $("hover_text").innerHTML = textArr[x-1];

}

var next = function() {
	if(x == 9) {
		x = 1;
		var filename = "images/" + (x)+".png";
	} else {
		x++;
		var filename = "images/" + (x)+".png";
	}
    $("viewer").src = filename;
    $("hover_text").innerHTML = textArr[x-1];

}



window.onload = function () {
    originalTable();
}