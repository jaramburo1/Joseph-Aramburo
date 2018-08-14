//Create var to store current time
var date, militaryHour, hour, minutes, seconds, totalMinutes, minutesString, time;
//document.getElementById("dayRange").value = totalMinutes;
function updateDate() {
	date = new Date();
	militaryHour = date.getHours(); //Need military hour to find AM or PM
	hour = militaryHour; //Hour used to build var time
	if (militaryHour > 12) { hour -= 12; }
	minutes = date.getMinutes();
	console.log(militaryHour);
	seconds = date.getSeconds();
	totalMinutes = militaryHour * 60 + minutes;
	minutesString = "";
	if (minutes < 10) {
		minutesString = "0" + minutes;
	} else {
		minutesString = "" + minutes;
	}
	time = "";
	if (militaryHour > 11) {
		time = hour + ":" + minutesString + " PM";
	} else {
		time = hour + ":" + minutesString + " AM";
	}
	document.getElementById("seconds").innerHTML = "Seconds: " + seconds;
	document.getElementById("currentTime").innerHTML = "Current Time: " + time;
	document.getElementById("totalMinutes").innerHTML = "Total Minutes: " + totalMinutes;
	document.getElementById("dayRange").value = totalMinutes;
	changeBackgroundColor();
}

setInterval(updateDate, 1000);

//document.getElementById("currentTime").innerHTML = "Current Time: " + time;

//document.getElementById("totalMinutes").innerHTML = "Total Minutes: " + document.getElementById("dayRange").value;
//document.getElementById("seconds").innerHTML = "Seconds: " + seconds;

//var range = document.getElementById("dayRange");
function changeBackgroundColor() {
	var range = document.getElementById("dayRange").value;
	console.log(range);
	//Midnight to sunrise
	if (range < 5 * 60) { document.body.style.backgroundColor = "#000"; }
	//Sunrise to morning
	if (range >= 5 * 60 && range < 7 * 60) { document.body.style.backgroundColor = "#ccccff"; }
	//Morning to sundown
	if (range >= 7 * 60 && range < 17 * 60) { document.body.style.backgroundColor = "#87CEEB"; }
	//Sundown to midnight
	if (range >= 17 * 60 && range < 19 * 60) { document.body.style.backgroundColor = "#ffa500"; }
	//Midnight
	if (range >= 19 * 60) { document.body.style.backgroundColor = "#000"; }
}