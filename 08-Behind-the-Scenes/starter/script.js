"use strict";

/*
// Scoping in practice
function calcAge(birthYear) {
	const age = 2037 - birthYear;

    printAge(age)

	function printAge() {
		let output = `You are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			const firstName = "Steve"; // finds variables in current scope first
			const str = `Oh, and you're a millenial, ${firstName}`;
			console.log(str);
		}

		console.log(millenial); // function scoped

		function add(a, b) {
			return a + b;
		}

		output = "new output";
	}

	// console.log(add(3+4)); // won't work in strict mode

	// console.log(output);

	return age;
}

const firstName = "jonas";
calcAge(1991);
*/

/*
// Hoisting and TDZ in practice
console.log(me);
// console.log(job);
// console.log(year);

var me = "jonas";
let job = "teacher";
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function declaration IS hoisted
function addDecl(a, b) {
	return a + b;
}

// const is not hoisted, var is undefined
const addExpr = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log("all products deleted");
}

var x = 1;
let y = 2;
const z = 3;
console.log(window);

console.log(this);

const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	console.log(this);
};

const calcAgeArrow = (birthYear) => {
	console.log(2037 - birthYear);
	console.log(this);
};

calcAge(1991);

const jonas = {
	year: 1991,
	calcAge: function () {
		console.log(this);
	},
};

jonas.calcAge();

const matilda = {
	year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

// Regular vs Arrow functions

var firstName = "Matilda";

const jonas = {
	firstName: "jonas",
	year: 1991,
	calcAge: function () {
		console.log(this);

		// const self = this; // self of that to preserve value
		// // arrow functions are the modern fix
		// const isMillenial = function () {
		// 	console.log(self);
		//     console.log(this);
		// 	console.log(this.year >= 1981 && this.year <= 1996);
		// 	console.log(self.year >= 1981 && self.year <= 1996);
		// };

		// arrow function uses parent scope
		const isMillenial = () => {
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
		};

		isMillenial();
	},

	// global scope
	greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
console.log(this.firstName);

const addExpr = function (a, b) {
	console.log(arguments); // returns an argument array
	return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 4);

// arrow function doesn't get the "arguments" keyword
var addArrow = (a, b, c) => {
	a + b;
};

const jessica1 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
};

function marryPerson(person, newLastName) {
	person.lastName = newLastName;
	return person;
}

const marriedJessica = marryPerson(jessica1, "Davis");

// const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before:", jessica1);
console.log("After:", marriedJessica);

const jessica2 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
	family: ["Alice", "Bob"],
};

// spread operator, copys all primitive values into a new object
// Doesn't copy objects
// Known as a shallow copy
const jessicaCopy = {...jessica2};
jessicaCopy.lastName = "Davis";

console.log(jessica2, jessicaCopy);
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log(jessica2, jessicaCopy);

// Deep copy
// uses the structuredClone() method
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");

console.log("Before:", jessica2);
console.log("After", jessicaClone);
*/
