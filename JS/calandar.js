var $ = function (id) { return document.getElementById(id); };

var getMonthText = function (currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayofMonth = function (currentMonth) {
    if (currentMonth === 0) { return 31; }
    else if (currentMonth === 1) { return 29; }
    else if (currentMonth === 2) { return 31; }
    else if (currentMonth === 3) { return 30; }
    else if (currentMonth === 4) { return 31; }
    else if (currentMonth === 5) { return 30; }
    else if (currentMonth === 6) { return 31; }
    else if (currentMonth === 7) { return 31; }
    else if (currentMonth === 8) { return 30; }
    else if (currentMonth === 9) { return 31; }
    else if (currentMonth === 10) { return 30; }
    else if (currentMonth === 11) { return 31; }
};

var printCoupon = function () {
    var couponDisplay = "<img src='images/QR.png' class='reg'>";

    $("couponDisplay").innerHTML = couponDisplay;
}

window.onload = function () {
    $("coupon").onclick = printCoupon;
    var day = new Date();
    var month = day.getMonth();
    var year = day.getFullYear();
    var currMonth = getMonthText(month);
    var firstDay = new Date(year, month, 1);
    var lastDay = getLastDayofMonth(month);
    var n = 1;
    var k = 0; 
    var saleDate = Math.floor(Math.random() * lastDay) + 1;

    $("month_year").innerHTML = currMonth + " " + year;
    
    var calandarDisplay = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    //empty days at start of month
     for (let i = 0; i < firstDay.getDay(); i++) {
        calandarDisplay += "<td class = 'cal_td'></td>";
        k++;
    } 
    //fill in days
    while(n <= lastDay) {
        if(n == saleDate) {
            calandarDisplay += "<td class = 'cal_td'>" + n + "<br><br><p>Sale! 30% off site wide!</p></td>";
            k++;
            if(((k-1) % 7) == 6) { //every 7 days start a new row
                calandarDisplay += "</tr><tr>";
            }
            n++;
            saleDate = Math.floor(Math.random() * lastDay) + 1;
        } else {
            calandarDisplay += "<td class = 'cal_td'>" + n + "</td>";
            k++;
            if(((k-1) % 7) == 6) { //every 7 days start a new row
                calandarDisplay += "</tr><tr>";
            }
            n++;
        }
    }
    //empty days at end of month
    if((new Date(year, month+1, 0)).getDay() < 6) {
        for (let i = (new Date(year, month+1, 0)).getDay(); i < 6; i++) {
            calandarDisplay += "<td class = 'cal_td'></td>";
        }
        
    }
    $("calendar").innerHTML = calandarDisplay;
};

 