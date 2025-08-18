"use strict";

//////////////////////////////////////////
//////////////// Lectures ////////////////

//////////////////////////////////////////
//// An overview of modern javascript development

/*
Modules + 3rd party packages on npm 
npm (node package manager)

modules -> build (bundling, transpiling/polyfilling) -> js bundle

Parcel bundler + Babel transpiler
*/

//////////////////////////////////////////
//// Overview of modules in javascript

/*
Module
Reusable piece of code that encapsulates implementation detail

Usually a standalone file

import {} from "" // dependency

export {} // public API

Native JavaScript (ES6) Modules
    - Modules stored in files, exactly one module per file
    - HTML linking <script type="module"
    - Async downloading

import {rand} from '.math.js' -> parsing index.js
import {showDice} from '.dom.js'

all imports handled before index.js file
    - imported synchronously
    - eliminate dead code with bundling

Flow
    - parsing
    - linking
    - Execution
*/

/* 
//////////////////////////////////////////
//// Exporting and Importing in ES6 Modules

// Named export | default export

// importing module
// import {addToCart, totalPrice as price, tq} from "./shoppingCart.js";

// addToCart("bread", 5);
// console.log(price, tq);



// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, tq} from "./shoppingCart.js";
*/
console.log("importing module");

import add, {cart} from "./shoppingCart.js";

add("pizza", 2);
add("bread", 5);
add("apples", 4);

// pointer to the cart array
console.log(cart);

/*
//////////////////////////////////////////
//// Top-Level await (ES2022)

// only in modules


console.log("Start fetching");

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);

console.log("Done fetching");
*/

/*
const getLastPost = async function () {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	console.log(data);

	return {title: data.at(-1).title, text: data.at(-1).body};
};

const lastPost = getLastPost();
console.log(lastPost); // returns a pending promise

// not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
//////////////////////////////////////////
//// The Module Pattern

const ShoppingCart2 = (function () {
	const cart = [];
	const shippingCost = 10;
	const totalPrice = 237;
	const totalQuantity = 23;

	const addToCart = function (product, quantity) {
		cart.push({product, quantity});
		console.log(`${quantity}, ${product} added to cart`);
	};

	const orderStock = function (product, quantity) {
		cart.push({product, quantity});
		console.log(`${quantity}, ${product} ordered from supplier`);
	};

	return {
		addToCart,
		cart,
		totalPrice,
		totalQuantity,
	};
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined
*/

/* 
//////////////////////////////////////////
//// CommonJS Modules
// AMD modules and CommonJS Modules (Node js)
// One modules one file

// CommonJS Modules
//Export
export.function (product, quantity) {
		cart.push({product, quantity});
		console.log(`${quantity}, ${product} added to cart`);
	};

// Import
const {addToCart} = require('./shoppingCart.js')
*/

//////////////////////////////////////////
//// A Brief Introduction to the Command Line
/*
commands covered
dir
cd (..) (../.. 2 levels up)
(tab to autocomplete)
cls - clear
edit (touch) - creates file
live-server (live-server ext)
del (rm) - delete
mv "file" "parent folder path" - move
mkdir/rmdir - create/remove directory
*/

/* 
//////////////////////////////////////////
//// Introduction to NPM

npm init - creates package.json

npm install leaflet 
npm i leaflet
    - creates node modules folder and updates package.json
    - need a module bundler

npm install lodash (utility module) 
npm install lodash-es (es modules)

npm install (install dependencies from package.json)

*/

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash";
import cloneDeep from "lodash-es";

const state = {
	cart: [
		{product: "bread", quantity: 5},
		{product: "bread", quantity: 5},
	],
	user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

// deep clone
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateDeepClone);
console.log(stateClone);

//////////////////////////////////////////
//// Bundling with Parcel and NPM Scripts

/*
npm install parcel --save-dev (makes this a "dev" tool)

npx parcel index.html

remove main target, add scripts "start, build"

Ctrl + C to stop

npx scripts 

npm i parcel -g (global install, not recommended)

npm run start
*/

// hot reload, parcel only
if (module.hot) {
	module.hot.accept();
}

//////////////////////////////////////////
//// Configuring Babel and Polyfilling
/* 
Parcel automatically uses Babel
*/

class Person {
	greeting = "hey";
	constructor(name) {
		this.name = name;
		console.log(`${this.greeting}, ${this.name}`);
	}
}

const jonas = new Person("jonas");

console.log("Jonas" ?? null);

console.log(cart.find((el) => el.quantity >= 2));

Promise.resolve("Test").then((x) => console.log(x));

// library for polyfilling
import "core-js/stable";

// polyfilling async functions
import "regenerator-runtime/runtime";

//////////////////////////////////////////
//// Review: Writing Clean and Modern JavaScript

// Lecture Review
/*
Readable Code
    - Understandable
    - Names
        - Variables -> what they contain
        - functions -> what they do

General
    - Use dry priciple
    - Don't pollute global namespace
    - use strong type checks (=== and !==)

Functions
    - Only one thing
    - 1-3 parameters (roughly)
    - default parameters
    - return the type you received

OOP
    - Use ES6 classes
    - Don't mutate data outside classes
    - implement method chaining
    - do not use arrow functions as methods

Avoid nested code
    - guard clauses
    - ternary operators
    - don't use else
    - avoid for loops
    - avoid callback-based async APIs (use promises)

Asynchronous code
    - Consume promises with async/await
    - Whenever possible, run promises in parallel (Promise.all)
    - Handle errors and promise rejections
*/

//////////////////////////////////////////
//// Let's Fix Some Bad Code: Part 1

// clean.js fixes applied

//////////////////////////////////////////
//// Declarative and Functional JavaScript Principles
/*
Imperative vs Declarative
    - Imperative
        - verbose (all steps explained)
    - Declarative
        - less verbose (steps abstracted)

Functional Programming
    - Declarative paradigm
    - Combining pure functions, avoiding side effect, avoiding mutating data
    - transformation with built in methods like map, filter, reduce

    - Side effect: Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc)

    - Pure function: no side effects, same inputs always lead to same outputs

    - Immutability: State (data) is never modified. State is copied and returned

Declarative Syntax
    - Destructuring
    - Spread operator
    - Ternary operator
    - Template literals
*/
//////////////////////////////////////////
//// Let's Fix Some Bad Code: Part 2

// clean.js fixes applied
