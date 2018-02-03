let timeStamp;
let hours;
let minutes;
let seconds;
let time;
let clock;
let amPm;

window.onload=function digitalClock() {
	timeStamp = new Date();
	
	hours = timeStamp.getHours();
	minutes = timeStamp.getMinutes();
	seconds = timeStamp.getSeconds();

	hours = checkTime(hours);
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);

	amPm = amOrpm(hours);

	hours = hourFormat(hours);

	time = `${hours} : ${minutes} : ${seconds} ${amPm}`
	document.getElementById("clock").innerHTML=time;
	setTimeout(digitalClock,1000);
}

function checkTime(i) {
	if(i < 10) {
		i = "0"+i;
	}
	return i;
}

function amOrpm(hour) {
	if(hour<12){
		return 'AM';
	} else if(hour>=12){
		return 'PM';
	}
}

function hourFormat(hour) {
	if(hour > 12) {
		hour = hour-12;
	}
	return hour;
}
