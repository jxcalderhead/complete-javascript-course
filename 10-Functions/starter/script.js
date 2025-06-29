"use strict";

/*

/////////////////////////////////////

//// Default Parameters

const bookings = [];

const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	// ES5
	// numPassengers = numPassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

// Maps in order
createBooking("LH123", undefined, 1000);

////////////////////////////////
//// How Passing Arguments Works: Values vs References

const flight = "LH234";
const jonas = {
	name: "Jonas Calderhead",
	passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
	flightNum = "LH999";
	passenger.name = "Mr. " + passenger.name;

	if (passenger.passport === 24739479284) {
		alert("checked in");
	} else {
		alert("wrong passport");
	}
};
checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// Same object in memory heap
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//////////////////////////
//// First-Class and Higher-Order Functions

// First-class functions
// Javascript treats functions as first-class citizens
// Functions are simply values
// functions are another "type" of object
// 1. storable in variables or properties
// 2. Pass functions as arguments to OTHER functions
// 3. return functions FROM functions
// 4. Call methods on functions

// Higher-Order Function
// a function that receives another function as an argument, that returns a new function, or both
// 1. function that receives another function (argument function is call a callback)
// 2. function that returns new function

//////////////////////////
//// Functions Accepting Callback Functions

const oneWord = function (str) {
	return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, ...other] = str.split(" ");
	return [first.toUpperCase(), ...other].join(" ");
};

// higher order function
const transformer = function (str, fn) {
	console.log(`Transformed string ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
	console.log(":D");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);

/////////////////////////////////////////
//// Functions Returning Functions

const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

// with arrow functions
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet2("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

//////////////////////////////////////////
//// The Call and Apply Methods

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({flight: `${this.iataCode}${this.flightNum}`, name});
	},
};

lufthansa.book(239, "Jonas Calderhead");
lufthansa.book(635, "John Smith");

const eurowings = {
	airlines: "Eurowings",
	iataCode: "EW",
	bookings: [],
};

// set book to the object function -> use either call or bind
const book = lufthansa.book;

// this points to undefined
// book(23, "Sarah Williams");

// Call method
// the first argument is used as self
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
	airline: "Swiss Air Lines",
	iataCode: "LX",
	bookings: [],
};

book.call(swiss, 584, "Mary Cooper");
console.log(swiss);

// Apply method - not used much
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// "best practice"
book.call(swiss, ...flightData);

//////////////////////////////////
//// The Bind method

// creates a new function with self -> argument (eurowings)
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEw(23, "Steven Williams");

// Binds arguments to a function to create a new function
const bookEW23 = book.bind(lufthansa, 23);
bookEW23("Jonas Calderhead");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

// handler uses the element as self
document
	.querySelector(".buy")
	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// self, rate, (value)
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

///////////////////////////////////
//// Coding Challenge 1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// This generates [0, 0, 0, 0]. More in the next section 😃
	answers: new Array(4).fill(0),

	// Code Here
	registerNewAnswer() {
		let answer = Number(
			prompt(`${this.question}\n${this.options.join("\n")}`)
		);

		if (answer < this.options.length && answer >= 0) {
			console.log("good answer");
			this.answers[answer]++;
			this.displayResult();
			this.displayResult("string");
		} else {
			console.log("bad answer");
		}
	},

	displayResult(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			console.log(`poll results are ${this.answers.join(", ")}`);
		}
	},
};

// Poll btn
// object.method.bind(object)
document
	.querySelector(".poll")
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// object.method.call({object data}, argument)
poll.displayResult.call({answers: [5, 2, 3]}, "string");
poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]}, "string");

/////////////////////////////////
//// Immediatley Invoked Function Expressions (IIFE)
const runOnce = function () {
	console.log("this will never run again");
};
runOnce();

// function expression
// () at the end calls the function
// IIFE
(function () {
	console.log("This will never run again");
	const isPrivate = 23;
})();

// console.log(isPrivate); // undefined

// arrow function IIFE
(() => console.log("This will ALSO never run again"))();

{
	const isPrivate = 23;
	var notPrivate = 23;
}

// console.log(isPrivate); // undefined

/////////////////////////////////////////////////
//// closures

// closures make functions remember where variables are made during it's creation, moves variable environment to heap and prevents garbage collection
// function always has access to the scope within which it was created
const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++;
		console.log(`${passengerCount}: passengers`);
	};
};

// returns a function expression
const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);

/////////////////////////////
//// more closure examples

// example 1
let f;

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

const h = function () {
	const b = 777;
	f = function () {
		console.log(b * 2);
	};
};

g();
f();

// reassigns the f function
h();
f();
console.dir(f);

// Timer example (function, time in ms)
setTimeout(function () {
	console.log("TIMER");
}, 10000);

// Example 2
const boardPassengers = function (n, wait) {
	const perGroup = n / 3;

	// closure on callback function
	setTimeout(function () {
		console.log(`We are now boarding all ${n} passengers`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait * 1000);

	console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

//////////////////////////////////////
//// Coding Challenge 2
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function () {
	const header = document.querySelector("h1");
	header.style.color = "red";

	document.body.addEventListener("click", function () {
		header.style.color = "blue";
	});
})();
*/
