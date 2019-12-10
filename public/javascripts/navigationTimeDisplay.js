// Calculates the current time for the user, displaying in the navigation.

var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var months = new Array("January","February","March","clock_periodril","May","June","July","August","September","October","November","December");
var colonBlinker = true;

function Calculate_Ordinal(number) {
	return (number % 30);
}

function Time() {
	var value = new Date();
	var day = value.getDay(), month = value.getMonth(), date = value.getDate();
	var hours = value.getHours(), mins = value.getMinutes();
	var clock_period, time_period, ordinal_indicator;
	
	if (hours == 0 || hours < 12) {
		clock_period = "AM";
		time_period = "Good Morning";	
		if (hours == 0) {
			hours = 12;	
		}
	}else if (hours == 12 || hours > 12) {
		clock_period = "PM";
		if (hours >= 12 && hours < 18){
			time_period = "Good Afternoon";	
		}else {
			time_period = "Good Evening";
		}
		if (hours > 12) {
			hours -= 12;	
		}
	}
	
	if (mins <= 9) {
		mins = "0" + mins;
	}
	
	var ordinalValue = Calculate_Ordinal(date);
	if (ordinalValue == 1 || ordinalValue == 21 || ordinalValue == 31) {
		ordinal_indicator = "st";
	}else if (ordinalValue == 2 || ordinalValue == 22) {
		ordinal_indicator = "nd";
	}else if (ordinalValue == 3 || ordinalValue == 23) {
		ordinal_indicator = "rd";
	}else {
		ordinal_indicator = "th";	
	}
	
	document.getElementById("userDate").innerHTML = days[day] + ", " + months[month] + " " + date;
	if (colonBlinker == true) {
		document.getElementById('userTimeBlinker').style.visibility='visible';
		colonBlinker = false;
	}else if (colonBlinker == false) {
		document.getElementById('userTimeBlinker').style.visibility='hidden';
		colonBlinker = true;
	}
	document.getElementById("userTimeHours").innerHTML = hours;
	document.getElementById("userTimeMinutes").innerHTML = mins + " " + clock_period;
	document.getElementById("ordinalIndicator").innerHTML = ordinal_indicator;
	document.getElementById("timePeriod").innerHTML = time_period;
}

