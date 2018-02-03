let timeStamp;
let hours;
let minutes;
let seconds;
let time;
let clock;

function digitalClock() {
	timeStamp = new Date();
	
	hours = timeStamp.getHours();
	minutes = timeStamp.getMinutes();
	seconds = timeStamp.getSeconds();

	time = `${hours} : ${minutes} : ${seconds}`
	document.write(time);
}
digitalClock();