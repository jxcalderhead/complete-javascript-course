"use strict";

/*

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
	"pasta",
	"gnocchi",
	"tomatoes",
	"olive oil",
	"garlic",
	"basil",
]);

const mexicanFoods = new Set([
	"tortillas",
	"beans",
	"rice",
	"tomatoes",
	"avocado",
	"garlic",
]);

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};


////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

// destructuring an arr into variables
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swaping
// const temp = main;
// main = secondary;
// secondary = temp;

// simplier swap with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested desturcturing
const nested = [2, 4, [5, 6]];

// const [i, , j] = [nested]

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Variable length destructuring
// [8, 9]
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

///////////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// destructuring Objects

// destructured object - useful for APIs
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// resigns the unpacking to specificed names (on the right)
const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// wrap in para when mutating var
({a, b} = obj);

// nested objects
const {
	sat: {open: o, close: c},
} = openingHours;
console.log(o, c);

// passing objects in and unpacking within the parameter specification
restaurant.orderDelivery({
	time: "22:30",
	address: "Via Del Sole, 21",
	mainIndex: 2,
	starterIndex: 2,
});

//////////////////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// The spread operator - expands into comma separated list
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// joining arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets, not objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

console.log(...str);
// console.log(`${...str} Schmedtmann`); // invalid

// Example
// const ingredients = [
// 	prompt("Let's make pasta! Ingredient 1?"),
// 	prompt("Let's make pasta! Ingredient 2?"),
// 	prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients)

//// Objects
// creates object with new elements
const newRestraurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe"};

console.log(newRestraurant);

// creates clone
const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorane Roma";

// different
console.log(restaurantCopy.name);
console.log(restaurant.name);

//////////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// Rest patterns and parameters
// packs variables into arrays - opposite of spread

// Spread (right side)
const arr = [1, 2, ...[3, 4]];

// Rest (left side) must be last element
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
	console.log(numbers);
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
};

add(2, 3, 6);
add(2, 3);
add(1, 2, 3, 4, 5, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza[("Mushrooms", "Onions", "Olives", "Spinach")];

restaurant.orderPizza["Mushrooms"];

//////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// Short circuiting (&& and ||)

//use ANY data type, return ANY data type, short-circuiting

// returns first truthy value (short circuiting)
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

// returns "Hello"
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0; // won't work properly if zero because it's falsy
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("-------- AND -------");

// short circuiting by seeing 0 and skipping 'Jonas'
// returns 0
console.log(0 && "Jonas");

// returns "Jonas"
console.log(7 && "Jonas");

// returns null
console.log("Hello" && 23 && null && "Jonas");

if (restaurant.orderPizza) {
	restaurant.orderPizza("mushrooms", "spinach");
}

// short circuiting
// don't do for readabilities sack
restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach");

/////////////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

//// Nullish Coalescing Operator
// won't work properly if zero because it's falsy
restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// uses nullish values instead of falsy values
// Nullish: null & undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// acts like or but using nullish valuses instead of falsy
// this returns 3
console.log(null ?? 3);

////////////////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// The Logical Assignment Operators
const rest1 = {
	name: "Capri",
	// numGuests: 20,
};

const rest2 = {
	name: "La Piazza",
	owner: "Giovanni Rossi",
};

// OR Assignment operator - careful with falsey values
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest1.numGuests ||= 10;

//Nullish assignment operator (if null then 10)
rest1.numGuests ??= 10;
rest1.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

/////////////////////////////////////////
// Coding Challenge 1
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// 1
let [players1, players2] = game.players;

// 2
let [gk, ...fieldPlayers] = players1;

// 3
let allPlayers = [...players1, ...players2];

// 4
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5
let {team1, x: draw, team2} = game.odds;

// 6
const printGoals = function (...players) {
	console.log(players);
	console.log(`${players.length} number of goals scored`);
};

// 7
team1 < team2 && console.log(`${game.team1} favored to win`);
team2 < team1 && console.log(`${game.team2} favored to win`);

///////////////////////////////////
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

//// Looping Arrays: the for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (each) of loop
for (const item of menu) {
	console.log(item);
}

for (const [i, el] of menu.entries()) {
	// console.log(`${item[0] + 1}: ${item[1]}`);
	console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

/////////////////////////////////
//// Enhanced Object Literals


const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	[`day-${2 + 4}`]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	// openingHours: openingHours,

	//ES6 function enhanced object literals
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};


////////////////////////

const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	// openingHours: openingHours,

	//ES6 function enhanced object literals
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

//// .? optional chaining
// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
	console.log(restaurant.openingHours.mon.open);
}

// with optional chaining
console.log(restaurant.openingHours.mon?.open);

// checks opening hours and mon
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
	// console.log(day);
	const open = restaurant.openingHours[day]?.open ?? "closed";
	console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{name: "Jonas", email: "hello@jonas.io"}];

// Does the value on the left exist
console.log(users[0]?.name ?? "User array empty");

////////////////////////////

const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	// openingHours: openingHours,

	//ES6 function enhanced object literals
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// Looping Objects: object keys, values, and entries

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
	openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}


//////////////////////////
//// Coding Challenge 2
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
// 	Gnarby: 1,
// 	Hummels: 1,
// 	Lewandowski: 2
// }

// 1.
for (const [i, player] of game.scored.entries()) {
	console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
	avg += odd;
}
console.log(avg / odds.length);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
	if (team == "x") {
		console.log(`Odds of draw: ${odd}`);
	} else {
		console.log(`Odds of victory for ${game[team]}: ${odd}`);
	}
}

// bonus
const scorers = {};

for (const player of game.scored.values()) {
	console.log(player);
	scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}

console.log(scorers);


/////////////////////////////////
const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	// openingHours: openingHours,

	//ES6 function enhanced object literals
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// Sets
const ordersSet = new Set([
	"Pasta",
	"Pizza",
	"Pizza",
	"Risotto",
	"Pasta",
	"Pizza",
]);

console.log(ordersSet);

console.log(new Set("Jonas"));

// Size instead of length in sets
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

ordersSet.delete("Risotto");

console.log(ordersSet);

// Undefined because no indexes
console.log(ordersSet[0]);

// clears the set
// ordersSet.clear()

// looping
for (const order of ordersSet) {
	console.log(order);
}

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set("jonasschmedtmann").size);

/////////////////////////
//// MDN sets for all methods

const italianFoods = new Set([
	"pasta",
	"gnocchi",
	"tomatoes",
	"olive oil",
	"garlic",
	"basil",
]);

const mexicanFoods = new Set([
	"tortillas",
	"beans",
	"rice",
	"tomatoes",
	"avocado",
	"garlic",
]);

// New operations to make sets useful
// Intersection
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log("intersection:", commonFoods);
console.log([...commonFoods]);

// Union
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union", italianMexicanFusion);

console.log(...new Set([...italianFoods, ...mexicanFoods]));

// Difference (A - B)
const unqiueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(unqiueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

// symmetric difference (double difference)
const uniqueItalianAndMexicanFoods =
	italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

// isDisjointFrom
console.log(italianFoods.isDisjointFrom(mexicanFoods));

// also sub and super set methods

////////////////////////////////
const italianFoods = new Set([
	"pasta",
	"gnocchi",
	"tomatoes",
	"olive oil",
	"garlic",
	"basil",
]);

const mexicanFoods = new Set([
	"tortillas",
	"beans",
	"rice",
	"tomatoes",
	"avocado",
	"garlic",
]);

const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	// openingHours: openingHours,

	//ES6 function enhanced object literals
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// Maps: fundamentals

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");

// set returns the map
console.log(rest.set(2, "Lisbon, Portugal"));

rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
	.set("open", 11)
	.set("close", 23)
	.set(true, "We are open :D")
	.set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear()

// array as key

// returns undefined, key is the object in memory
rest.set([1, 2], "Test");
console.log(rest.get([1, 2]));

// Instead use a pointer
const arr = [1, 2];
rest.set(document.querySelector("h1"), "Heading");
rest.set(arr, "Test");
console.log(rest.get(arr));

//////////////////////
const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	openingHours,

	// openingHours: openingHours,

	//ES6 function enhanced object literals
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// Maps: iteration
const question = new Map([
	["question", "What is the best programming language?"],
	[1, "C"],
	[2, "Java"],
	[3, "JavaScript"],
	["correct", 3],
	[true, "Correct!"],
	[false, "Try again!"],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// iterations

// quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
	if (typeof key === "number") {
		console.log(`Answer ${key}: ${value}`);
	}
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log([...question]);

// other methods
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/////////////////////////////////////
//// Summary: Which data structure to use?
/////////////////////////////////////

//// Coding Challenge 3
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

const gameEvents = new Map([
	[17, "⚽️ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽️ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽️ GOAL"],
	[80, "⚽️ GOAL"],
	[92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const numberOfEvents = gameEvents.size; // 10
console.log(
	`An event happene on average, every ${90 / numberOfEvents} minutes`
);

// 4
for (const [time, event] of gameEvents.entries()) {
	const msgStr = time <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
	console.log(`${msgStr} ${time}: ${event}`);
}

//////////////////////////////////////////////////////////////
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//// Working With Strings - Part 1

const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// Counts from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
	// B and E are middle seats
	const s = seat.slice(-1);
	if (s === "B" || s === "E") {
		console.log("You got the middle seat");
	} else {
		console.log("You got lucky");
	}
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3C");

// Behind the scences boxing for string methods
console.log(new String("jonas"));

///////////////////////////////
//// Working with String: part 2

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
	passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing email
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
	"All passengers come to boarding door 23. Boarding door 23!";

// console.log(announcement.replace('door', gate));
console.log(announcement.replaceAll("door", gate));

// Regex
console.log(announcement.replaceAll(/door/g, gate));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus" && plane.endsWith("neo"))) {
	console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
	const baggage = items.toLowerCase();
	if (baggage.includes("knife") || baggage.includes("gun")) {
		console.log("You are NOT allowed to board");
	} else {
		console.log("Welcome aboard!");
	}
};

checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Snakcs and a gun for protection");

///////////////////////////////////////
//// Working with Strings - Part 3

console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

const passenger = "jessica ann smith davis";

const capitalizeName = function (name) {
	const names = name.split(" ");
	const namesUpper = [];

	for (const n of names) {
		namesUpper.push(n[0].toUpperCase() + n.slice(1));
	}

	console.log(namesUpper.join(" "));
};

capitalizeName(passenger);

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("jonas".padStart(25, "+"));

const maskCreditCard = function (number) {
	const str = number + "";

	const last = str.slice(-4);
	return last.padStart(str.length, "*");
};
console.log(maskCreditCard(1234123412341235));

// Repeat
const message2 = "Bad Weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
	console.log(`There are ${n} planes in line ${"*".repeat(n)}`);
};

planesInLine(6);

/////////////////////// /////////////////
//// Coding Challenge 4


// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!


document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Prefilling text area for convenices
document.querySelector("textarea").value =
	"underscore_case \n first_name \nSome_Variable \n  calculate_AGE\ndelayed_departure";

// Word processing function
/**
 * @param {string} w - The raw word passed in
 * @returns {string} - The formatted word
 */

/*
const processWord = function (w) {
	let words = w.trim().toLowerCase().split("_");

	for (let i = 0; i < words.length; i++) {
		if (i === 0) continue;
		else {
			let word = words[i];
			word = word[0].toUpperCase() + word.slice(1);
			words[i] = word;
		}
	}

	return words.join("");
};

// console.log(processWord("first_name_test"));

// Event listener
document.querySelector("button").addEventListener("click", function () {
	const text = document.querySelector("textarea").value;

	// console.log("input:\n", text);

	let textArray = text.split("\n");

	// console.log(textArray);

	for (const [index, word] of textArray.entries()) {
		console.log(`${processWord(word).padEnd(20)}${"✅".repeat(index + 1)}`);
	}
});

///////////////////////////////////////
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//// String Methods Practice
const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
	const [type, from, to, time] = flight.split(";");

	const output = `${type.startsWith("_Delayed") ? "❌" : ""}${type.replaceAll(
		"_",
		" "
	)} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(
		36
	);

	console.log(output);
}
*/
