"use strict";

//////////////////////////////
//// What is Object-Oriented Programming?

///////////////////////////////////
//// OOP In JavaScript

// Abstraction, Encapsulation, Inheritance, Polymorphism

// Class -> instantiation -> instance
// Prototypal inheritance, all methods on protoypes are usable by all linked objections
// Object -> delegation -> prototype

// 3 ways of implementing prototypal inheritance
// 1. Constructor functions (function -> object)
// 2. ES6 Classes           (syntactic sugar)
// 3. Object.create()       (links object to prototype)

/* 
///////////////////////////////////////
//// Constructor Functions and the New Operator

// arrow functions are invalid (no this keyword)
const Person = function (firstName, birthYear) {
	// Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// // Never put method inside constructor function
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matrilda", 2017);
const jack = new Person("Jack", 1975);

console.log(matilda, jack);

const jay = "Jay";

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

/////////////////////////////////////////////
//// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);

// true
console.log(jonas.__proto__ === Person.prototype);

// true
console.log(Person.prototype.isPrototypeOf(jonas));

// false
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda);

console.log(jonas.hasOwnProperty("firstName"));

/////////////////////////////////
//// Prototypal inheritance and the prototype chain

////////////////////////////////////
//// Prototypal inheritance on built-in objects

console.log(jonas.__proto__);

// Object
console.log(jonas.__proto__.__proto__);

// null
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 8, 9, 9, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Generally not recommended
Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
console.dir((x) => x + 1);
*/

/////////////////////////////////
//// Coding challege 1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

/*
// 1.
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
	this.speed = this.speed + 10;
	console.log(`${this.make} is now at ${this.speed} km/h`);
};

// 3.
Car.prototype.brake = function () {
	this.speed = this.speed - 5;
	console.log(`${this.make} is now at ${this.speed} km/h`);
};

// 4.
const honda = new Car("civic", 40);
const audi = new Car("R8", 100);

honda.accelerate();
honda.accelerate();
honda.brake();

audi.accelerate();
audi.brake();
audi.accelerate();
*/

/* 
///////////////////////////////////
//// ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	// prototypal inheritance
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	get age() {
		return 2037;
	}
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

// true
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
	console.log(`Hey ${this.firstName}`);
};

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (passable into functions)
// 3. body of a class is always executed in strict mode

//////////////////////////////////////////////
//// Setters and Getters
// accessor properties

// Object literal
const account = {
	owner: "Jonas",
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	},
};

// use getter
console.log(account.latest);

// use setter
account.latest = 50;

// Classes
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// prototypal inheritance
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) {
			this._fullName = name;
		} else {
			console.log(`${name} is not a full name!`);
		}
	}

	get fullName() {
		return this._fullName;
	}
}

const walter = new PersonCl("Walter White", 1965);

const jessica = new PersonCl("Jessica Davis", 1996);

console.log(jessica.age);

////////////////////////////
//// Static methods

console.log(Array.from(document.querySelectorAll("h1")));

class Person {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// prototypal inheritance
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) {
			this._fullName = name;
		} else {
			console.log(`${name} is not a full name!`);
		}
	}

	get fullName() {
		return this._fullName;
	}

	static hey() {
		console.log("Hey there");
		console.log(this);
	}
}

// Person.hey = function () {
// 	console.log("Hey there");
// 	console.log(this);
// };

Person.hey();
// jonas.hey() // invalid

/////////////////////////////////////////////
//// Object.create

const Person = function (firstName, birthYear) {
	// Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// // Never put method inside constructor function
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

// creates new object linked to a prototype
const steven = Object.create(PersonProto);

steven.name = "Steven";
steven.birthYear = 2002;

console.log(steven);
steven.calc();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", "1979");
sarah.calcAge();
*/

////////////////////////////////////
//// Coding Challenge 2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

/* 
// 1. new car
class Car {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is now at ${this.speed} km/h`);
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is now at ${this.speed} km/h`);
	}
}

const ford = new Car("Ford", 120);

ford.accelerate();
ford.brake();
ford.brake(); // now at 120

// getter
console.log(ford.speedUS); // 120 -> 78

// setter
ford.speedUS = 130; // 130 -> 208
console.log(ford.speed);

/////////////////////////////////
//// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
	Person.call(this, firstName, birthYear);
	this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");

mike.introduce();
// mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/////////////////////////////////////// Coding Challenge 3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

/*
// Original Car
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed = this.speed + 10;
	console.log(`${this.make} is now at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed = this.speed - 5;
	console.log(`${this.make} is now at ${this.speed} km/h`);
};

// 1.
const EV = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
	console.log(`Current charge: ${this.charge}%`);
};

// 3.
EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge -= 1;
	console.log(
		`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
	);
};

// 4.
const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

tesla.chargeBattery(50);

////////////////////////////////////////
//// Inheritance Between "Classes": ES6 Classes

class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// prototypal inheritance
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) {
			this._fullName = name;
		} else {
			console.log(`${name} is not a full name!`);
		}
	}

	get fullName() {
		return this._fullName;
	}

	static hey() {
		console.log("Hey there");
		console.log(this);
	}
}

// links prototypes
class StudentCl extends PersonCl {
	constructor(fullName, birthYear, course) {
		// always needs to happen first
		super(fullName, birthYear); // parentClass.call
		this.course = course;
	}

	introduce() {
		console.log(`My name is ${this.fullName} and I study ${this.course}`);
	}

	calcAge() {
		console.log(
			`I'm ${
				2037 - this.birthYear
			} years old, but as a student I feel more like ${
				2037 - this.birthYear + 10
			}`
		);
	}
}

const martha = new StudentCl("Martha Jones", 2012, "computer science");

martha.introduce();
martha.calcAge();

////////////////////////////////////
//// Inheritance Between "Classes": Object.create

const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

// creates new object linked to a prototype
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
	PersonProto.init.call(this, firstName, birthYear);
	this.course = course;
};

StudentProto.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");

jay.introduce();
jay.calcAge();

////////////////////////////////////////
//// Another Example

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	// Public interface
	deposit(val) {
		this.movements.push(val);
	}

	withdraw(val) {
		this.deposit(-val);
	}

	approveLoan(val) {
		return true;
	}

	requestLoan(val) {
		if (this.approveLoan(val)) {
			this.deposit(val);
			console.log("Loan Approved!");
		}
	}
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1.movements);
console.log(acc1.pin);

//////////////////////////////////////
//// Encapsulation: Private Class Fields and Methods

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// + static versions

class Account {
	locale = navigator.language; // public fields
	bank = "bankist";

	#movements = []; // private field
	#pin; // private field with constructor

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;
		// this.movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	getMovements() {
		return this.#movements;
		// not chainable
	}

	// Public interface (API)
	deposit(val) {
		this.#movements.push(val);
		return this;
	}

	withdraw(val) {
		this.deposit(-val);
		return this;
	}

	// private method
	#approveLoan(val) {
		return true;
	}

	requestLoan(val) {
		if (this.#approveLoan(val)) {
			this.deposit(val);
			console.log("Loan Approved!");
		}
		return this;
	}

	static test() {
		console.log("TEST");
		return true;
	}
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);

console.log(acc1.pin); // undefined

// static review
// acc1.test(); // invalid
Account.test(); // valid

//////////////////////////////////
//// Chaining Methods
acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);

// chaining by return this
acc1.deposit(300)
	.withdraw(100)
	.withdraw(50)
	.requestLoan(25000)
	.withdraw(4000)
	.getMovements(); // not chainable

// return this at the end of methods to return the object
*/

////////////////////////////////////////
//// ES6 Classes Summary

/*
class Student extends Person {
	university = "University of Lishon";
	#studyHours = 0;
	#course;
	static numSubjects = 10;

	constructor(fullName, birthYear, startYear, course) {
		super(fullName, birthYear);

		this.startYear = startYear;

		this.#course = course;
	}

	introduce() {
		console.log(`I study ${this.#course} at ${this.university}`);
	}

	study(h) {
		this.#makeCoffee();
		this.#studyHours += h;
	}

    // possible use _ if browser doesn't work
	#makeCoffee() {
		return "Here is a coffee for you";
	}

	get testScore() {
		return this._testScore;
	}

	set testScore(score) {
		this._testScore = score < 20 ? score : 0;
	}

    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}

const student = new Student('Jonas', 2020, 2037, 'Medicine')
*/

/////////////////////////////////////////
//// Coding Challenge 4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// Original Car
class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is now at ${this.speed} km/h`);
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is now at ${this.speed} km/h`);
	}
}

class EVCl extends CarCl {
	#charge;

	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is now at ${this.speed} km/h`);
		return this;
	}

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(
			`${this.make} going at ${this.speed} km/h, with a charge of ${
				this.#charge
			}%`
		);
		return this;
	}

	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		console.log(`Current charge: ${this.#charge}%`);
		return this;
	}
}

const rivian = new EVCl("Rivian", 120, 23);

rivian
	.accelerate()
	.brake()
	.brake()
	.accelerate()
	.brake()
	.chargeBattery(50)
	.brake();

console.log(rivian.speed, rivian.make, rivian.speedUS);
