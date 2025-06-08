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



// Introduction to Objects

// object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Calderhead',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};



// Dot vs bracket notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Calderhead',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas)

// dot notation
console.log(jonas.lastName)

// bracket notation
console.log(jonas['lastName'])

const nameKey = 'Name';

console.log(jonas['first' + nameKey], jonas['last' + nameKey])

// const interestedIn = prompt("What do you want to know about Jonas? Choose something")


// console.log(jonas[interestedIn])

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// }
// else {
//     console.log('Wrong request')
// }

// adding values
jonas.location = 'Portugal'
jonas['twitter'] = '@jonascalderhead'
console.log(jonas)

console.log(`Jonas has ${jonas.friends.length} friends, the first is ${jonas.friends[0]}`)



// Object methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Calderhead',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // clacAge: function() {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }
    
    clacAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        this.summary = `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${
            (this.hasDriversLicense) ? ("can") : ("can't")
        } drive.`;
        return this.summary
    }
};

console.log(jonas.clacAge())
// console.log(jonas['clacAge'](1991))

console.log(jonas.age)

// "Jonas is a 46-year old taecher, and he can drive"
console.log(jonas.getSummary())



// coding challenge 3
const mark = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = (this.mass) / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Miller',
    mass: 92,
    height: 1.95,
    
    calcBMI: function() {
        this.bmi = (this.mass) / (this.height * this.height)
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    // johns higher than mark
    console.log(`${john.fullName}'s BMI (${john.bmi}) is hgiher than ${mark.fullName}'s (${mark.bmi}!)`)
}
else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is hgiher than ${john.fullName}'s (${john.bmi}!)`)
}


// Iteration: The for loop

// console.log('Lifting weights rep 1')
for(let i=1; i <= 10; i++) {
    console.log(`Lifting weights rep ${i}`)
}


// Looping arryas, breaking anf continuing
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    46,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const types = [];

for(let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i])
    // types[i] = (typeof jonasArray[i]);
    types.push(jonasArray[i]);
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}

console.log(ages)

// continue and break
for(let i=0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i])
}


for(let i=0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i])
}


// looping backward and nested loops
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    46,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]


for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i])
}   
for (let i = 1; i <4; i++) {
    console.log(`------- Starting Exercise ${i} --------`)

    for(let j = 1; j < 6; j++) {
        console.log(`Lifting rep ${j}`)
    }
}



// While loop
// for(let i = 1; i <= 10; i++) {
//     console.log(`Lifting rep ${i}`)
// }

// let j = 1;
// while (j <= 10) {
//     console.log(`WHILE: Lifting rep ${j}`)
//     j++;    
// }


let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
}


// Coding Challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }

    return (sum / arr.length)

}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for(let i=0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    totals[i] = (tips[i] + bills[i])
}


console.log(calcAverage(totals))
*/




