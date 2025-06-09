// Remember, we're gonna use strict mode in all scripts now!
// Prettier installed and configured
// 'cl' snipper mapped to console.log($0)
"use strict";

/*
let a = 192;

if (x === 23) {
	console.log("x is 23");
} else if (x == 24) {
	console.log("x is 24");
} else {
	console.log("something else");
}

const calcAge = (birthYear) => 2037 - birthYear;

const arrow = () => 2037 + a;

console.log(calcAge(1991));
*/

const temperatues = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let high;
let low;
for (let i = 0; i < temperatues.length; i++) {
	if (typeof temperatues[i] != "number") {
		console.log("not a number");
		continue;
	} else if (typeof high != "number" || typeof low != "number") {
		// debugger;
		high = temperatues[i];
		low = temperatues[i];
	} else {
		if (temperatues[i] > high) {
			high = temperatues[i];
		}
		if (temperatues[i] < low) {
			low = temperatues[i];
		}
	}
}

let amplitude = Math.abs(high - low);
console.log(high, low, amplitude);

// Debugging
const measureKelvin = function () {
	const measurement = {
		type: "temp",
		unit: "celsius",
		// value: Number(prompt("Degrees celsius")),
		value: 10,
	};

	console.table(measurement);
	// console.warn(typeof measurement.value);
	// console.error(measurement.value);

	const kelvin = measurement.value + 273;
	return kelvin;
};

console.log(measureKelvin());
