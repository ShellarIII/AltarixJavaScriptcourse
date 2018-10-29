/* Первое задание */

function Clock() {  
	this.date = new Date();
}
Clock.prototype.start = function() {  
	setInterval(function() {   
		this.date = new Date();  
	}.bind(this), 1000);
}
Clock.prototype.getTime = function() {  
	return this.date.toLocaleTimeString();
}

const myClock = new Clock();
myClock.start();
console.log(myClock.getTime());
setTimeout(function() {
	console.log(myClock.getTime());
}, 5000);


/* Второе задание */

function AlarmClock(){
	Clock.apply(this, arguments);
	this.alarmTime = '';
}

AlarmClock.prototype = Object.create(Clock.prototype);
AlarmClock.prototype.constructor = AlarmClock;

AlarmClock.prototype.setAlarmTime = function(time) {  
	this.alarmTime = time;
}

AlarmClock.prototype.start = function() {  
	setInterval(function() {   
		this.date = new Date();
		if(this.date.toLocaleTimeString() === this.alarmTime){
			alert('Wake up!');
		}
	}.bind(this), 1000);
}

