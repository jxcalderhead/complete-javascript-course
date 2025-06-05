'use strict';
/*

// Activating Strict Mode
// must be the very first line in script for strict mode
// 'use strict';
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true

if(hasDriversLicence) {
    console.log("I can drive")
}

// const interface = 'Audio' // strict mode reserved keyword
// const private = 534;



// Functions
function logger() {
    console.log("my name is Jonas");
}

logger(); // invoking, calling, running

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`
    return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


// function declarations vs expressions
// function delaration
// can call them before defined
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1)

// anonomous function
// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2)



// arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'bob'))


// Functions calling other functions
function cutFruitPiece(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPiece(apples)
    const orangePieces = cutFruitPiece(oranges)

    const juice =  `Jucice with ${applePieces} apple pieces and ${orangePieces} oranges pieces`
    return juice;
}

console.log(fruitProcessor(2, 3))


// Reviewing functions
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    }
    else {
        console.log('Already retired')
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))



// Introduction to arrays
const friend1 = 'name1'
const friend2 = 'name2'
const friend3 = 'name3'

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends.length)

console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends)

const jonas = ['Jonas', 'Calderhead', (2037-1991), friends]

console.log(jonas)

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]

console.log(calcAge(years))



// Basic Array operations (methods)
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay')
// adds last
console.log(friends)
console.log(friends.length)
// adds first
friends.unshift('John')
console.log(friends)

// remove last
const popped = friends.pop();
// removes first
friends.shift()

console.log()

// -1 if not found
console.log(friends.indexOf('Steven'))

// returns boolean
console.log(friends.includes('Steven'))


// coding challenge 2
let bills = [125, 555, 44]


function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20)
}

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
let totals = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])]
*/


// Introduction to Objects






