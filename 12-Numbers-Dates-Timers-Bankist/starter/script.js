"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		"2019-11-18T21:31:17.178Z",
		"2019-12-23T07:42:02.383Z",
		"2020-01-28T09:15:04.904Z",
		"2020-04-01T10:17:24.185Z",
		"2020-05-08T14:11:59.604Z",
		"2025-07-03T17:01:17.194Z",
		"2025-07-07T23:36:17.929Z",
		"2025-07-08T10:51:36.790Z",
	],
	currency: "EUR",
	locale: "pt-PT", // de-DE
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		"2019-11-01T13:15:33.035Z",
		"2019-11-30T09:48:16.867Z",
		"2019-12-25T06:04:23.907Z",
		"2020-01-25T14:18:46.235Z",
		"2020-02-05T16:33:06.386Z",
		"2020-04-10T14:43:26.374Z",
		"2020-06-25T18:49:59.371Z",
		"2020-07-26T12:01:20.894Z",
	],
	currency: "USD",
	locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
	const calcDaysPassed = (date1, date2) =>
		Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 25));

	const daysPassed = calcDaysPassed(new Date(), date);
	// console.log(daysPassed);

	if (daysPassed === 0) return "Today";
	if (daysPassed === 1) return "Yesterday";
	if (daysPassed <= 7) return `${daysPassed} days ago`;

	// const day = `${date.getDate()}`.padStart(2, 0);
	// const month = `${date.getMonth() + 1}`.padStart(2, 0);
	// const year = date.getFullYear();

	// return `${day}/${month}/${year}`;

	return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
	}).format(value);
};

const displayMovements = function (acc, sort = false) {
	containerMovements.innerHTML = "";

	const combinedMovsDates = acc.movements.map((mov, i) => ({
		movement: mov,
		movementDate: acc.movementsDates.at(i),
	}));

	if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

	combinedMovsDates.forEach(function (obj, i) {
		const {movement, movementDate} = obj;
		const type = movement > 0 ? "deposit" : "withdrawal";

		const date = new Date(movementDate);
		const displayDate = formatMovementDate(date, acc.locale);

		const formattedMov = formatCur(movement, acc.locale, acc.currency);

		const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

	labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

	const out = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = formatCur(
		Math.abs(out),
		acc.locale,
		acc.currency
	);

	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = formatCur(
		interest,
		acc.locale,
		acc.currency
	);
};

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};
createUsernames(accounts);

const updateUI = function (acc) {
	// Display movements
	displayMovements(acc);

	// Display balance
	calcDisplayBalance(acc);

	// Display summary
	calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
	// time = 5 min

	const tick = function () {
		const min = String(Math.trunc(time / 60)).padStart(2, 0);
		const sec = String(time % 60).padStart(2, 0);

		labelTimer.textContent = `${min}:${sec}`;

		if (time === 0) {
			clearInterval(timer);
			labelWelcome.textContent = "Log in to get started";
			containerApp.style.opacity = 0;
		}

		time--;
	};

	let time = 120;

	// call timer every 5 sec
	tick();
	const timer = setInterval(tick, 1000);

	return timer;
	// when 0 seconds, log out user
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
	// Prevent form from submitting
	e.preventDefault();

	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);
	console.log(currentAccount);

	if (currentAccount?.pin === +inputLoginPin.value) {
		// Display UI and message
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;

		containerApp.style.opacity = 100;

		// const now = new Date();
		// const day = `${now.getDate()}`.padStart(2, 0);
		// const month = `${now.getMonth() + 1}`.padStart(2, 0);
		// const year = now.getFullYear();
		// const hour = `${now.getHours()}`.padStart(2, 0);
		// const min = `${now.getMinutes()}`.padStart(2, 0);

		// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

		const now = new Date();
		const options = {
			hour: "numeric",
			minute: "numeric",
			day: "numeric",
			month: "numeric",
			year: "numeric",
			// weekday: "numerics",
		};

		// const locale = navigator.language;
		// console.log(locale);

		labelDate.textContent = new Intl.DateTimeFormat(
			currentAccount.locale,
			options
		).format(now);

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();

		if (timer) clearInterval(timer);
		timer = startLogOutTimer();

		// Update UI
		updateUI(currentAccount);
	}
});

btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = +inputTransferAmount.value;
	const receiverAcc = accounts.find(
		(acc) => acc.username === inputTransferTo.value
	);
	inputTransferAmount.value = inputTransferTo.value = "";

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Doing the transfer
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		// Add transfer date
		currentAccount.movementsDates.push(new Date().toISOString());
		receiverAcc.movementsDates.push(new Date().toISOString());

		// Update UI
		updateUI(currentAccount);

		// reset timer
		clearInterval(timer);
		timer = startLogOutTimer();
	}
});

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Math.floor(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		setTimeout(() => {
			// Add movement
			currentAccount.movements.push(amount);

			// Add loan date
			currentAccount.movementsDates.push(new Date().toISOString());

			// Update UI
			updateUI(currentAccount);

			// reset timer
			clearInterval(timer);
			timer = startLogOutTimer();
		}, 2500);
	}
	inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		+inputClosePin.value === currentAccount.pin
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);
		console.log(index);
		// .indexOf(23)

		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
	e.preventDefault();
	displayMovements(currentAccount, !sorted);
	sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* 
/////////////////////////////////////////////
//// Converting and Checking Numbers

console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false because of rounding

// string to number
console.log(Number("23"));
console.log(+"23");

// parsing
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e23")); // NaN

console.log(Number.parseFloat("2.5rem")); // 2.5

console.log(parseFloat("2.5rem"));

// checking is value is isNaN
console.log(20, Number.isNaN(20)); // false
console.log("20", Number.isNaN("20")); // false
console.log("20X", Number.isNaN(+"20X")); // true
console.log("23 / 0", Number.isNaN(23 / 0)); // false

// checking if value is a number (not a string)
console.log(20, Number.isFinite(20)); // true
console.log("20", Number.isFinite("20")); // false
console.log("20X", Number.isFinite(+"20X")); // false
console.log("23 / 0", Number.isFinite(23 / 0)); // false

console.log(23, Number.isInteger(23)); // true
console.log("23.0", Number.isInteger(23.0)); // true
console.log("23 / 0", Number.isInteger(23 / 0)); // false

//////////////////////////////////
//// Math and Rounding

// square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, "11", 2)); // 23

console.log(Math.min(5, 18, 23, 7)); // 5

console.log(Math.PI * Number.parseFloat("10px") ** 2); // area of circle

console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6

const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// rounding
console.log("trunc 23.3", Math.trunc(23.3)); // 23
console.log("round 23.9", Math.round(23.9)); // 24
console.log("round 23.3", Math.round(23.3)); // 23

console.log("ceil 23.3", Math.ceil(23.3)); // 24
console.log("ceil 23.9", Math.ceil(23.9)); // 24

console.log("floor 23.9", Math.floor(23.9)); // 23

// Rounding decimals
console.log((2.7).toFixed(0)); // returns string of number
console.log((2.7).toFixed(3)); // 2.7000
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // 2.35

///////////////////////////////////
//// The remainder operator
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener("click", function () {
	console.log("balance clicked");
	[...document.querySelectorAll(".movements__row")].forEach(function (
		row,
		i
	) {
		console.log(row);
		if (i % 2 === 0) row.style.backgroundColor = "orangered";
		if (i % 3 === 0) row.style.backgroundColor = "blue";
	});
});

///////////////////////////////////
//// Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15; // must place between numbers

console.log(Number("230000"));
console.log(Number("230_000")); // NaN

//////////////////////////////////////
//// Working with bigInt
console.log(2 ** 53 - 1); // largest normal number
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 2);

// add 'n' to the end
console.log(234567754321435678984732145875967321643n);
console.log(BigInt(2345677543214356));

// Operations
console.log(10000n + 10000n);
console.log(35454645276452423546452313544343n * 11111111111111111111n);

const huge = 43209450873084759382702734058n;
const num = 23;
// console.log(huge * num); // error
console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == 20); // true

console.log(typeof 20n);
console.log(20n == "20"); // true

console.log(huge + " is REALLY big!!!");

// Math.sqrt(15n) // error

// divisions
console.log(10n / 3n); // 3 - cuts decimal part
console.log(10 / 3);

////////////////////////////////
//// Creating Dates

// Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date("Aug 02 2020 18:05:41"));
// console.log(new Date("December 24, 2015"));

// console.log(new Date(account1.movementsDates[0]));

// // Month is zero based
// // (year, month, day, hour, minute, second)
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));

// // days to miliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142274980000));

console.log(Date.now());

future.setFullYear(2040)
console.log(future);

///////////////////////////////////////
//// Operations with Dates

// for advanced, use a library like temporal API

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // timestamp in ms

const calcDaysPassed = (date1, date2) =>
	Math.abs(date2 - date1) / (1000 * 60 * 60 * 25);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

console.log(days1);

//////////////////////////////////////
//// Internationalizing Dates (intl)

//////////////////////////
//// International Number (intl)
const num = 32456.23;

const options = {
	style: "currency", // unit, percent, currency
	unit: "celsius",
	currency: "EUR",
	// useGrouping: false,
};

console.log("US", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
	"Browser",
	new Intl.NumberFormat(navigator.language, options).format(num)
);

////////////////////////////////////////////////
//// Timers: setTimeOut and setInterval

// setTimeOut
// timeout arg in ms
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
	(ing1, ing2) => console.log(`Here is your pizza! With ${ing1} & ${ing2}`),
	3000,
	...ingredients
);

console.log("waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
const intervalId = setInterval(() => {
	const now = new Date();
	console.log(now);
}, 3000);

// clear it
clearInterval(intervalId);
*/
