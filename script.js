<<<<<<< Updated upstream
=======
var	stuff={
	make: 'I wanna be fun'
	doCoolStuff: function () {
		document.getElementById('cool').className = 'cool red';
	}
};

>>>>>>> Stashed changes
var car={
	make: 'Chevrolet',
	type: 'Colorado',
	color: 'Silver',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
	'seat 1', 
	'seat 2',
	'seat 3',
	'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn= true;
	},
	fly: function (){
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car '+isOn);
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}	
};
console.log('hello there friends');