// Values and variables
/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('jonas');

let firstName = "Jonas"

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob)
*/

// Values and Variables Assignment
/*
let country = "United States"
let continent = "North America"
let population = "1 Billion"

console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}`)


// Data types
console.log(true);
let javaScriptIsFun = true;

// determines type
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof "Jonas");

javaScriptIsFun = 'YES!';

console.log(typeof javaScriptIsFun);
console.log(javaScriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;

// returns object
console.log(typeof null)



// let const var
let age = 30;
age = 31;

// const can't be reassigned
const birthYear = 1991;
// birthYear = 1990;
// const job - returns missing init error

// avoid var, function scope
var job = "programmer";
job = "teacher";

// avoid, creates property on global element
lastName = "calderhead"
console.log(lastName);



// Basic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 = 2^3

const firstName = "Jonas";
const lastName = "Calderhead";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++;
console.log(x);

// comparison operators

// <, >, <=, >=, ==, ===


console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


// operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge)




// Coding challenge 1
let markWeight = 78
let johnWeight = 92
let markHeight = 1.69
let johnHeight = 1.95
let markBMI = markWeight / (markHeight ** 2)
let johnBMI = johnWeight / (johnHeight ** 2)

let markHigherBMI = markBMI > johnBMI

console.log(`
Mark BMI: ${markBMI}\n
John BMI: ${johnBMI}\n
Mark's BMI higher? ${markHigherBMI}
`)


// Strings and template literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;

console.log(jonas)

const jonasNew = `
I'm ${firstName}, a ${year - birthYear} year 
old ${job}!
`
console.log(jonasNew)

console.log(`Multiple
line
Strings`)



// if else statements
const age = 15;

if(age >= 18) {
    console.log("sarah can start driving 👌")
}
else {
    const yearsLeft = 18 - age;
    console.log("Sarah can't drive");
}

const birthYear = 1991;

let century;
if(birthYear <= 2000) {
    century = 20
}
else {
      century = 21
}

console.log(century);



// Type conversion and coercion
// conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18); //converts string to number

console.log(Number("Jonas")) // returns NaN (not a number)

console.log(String(23), 23)

// coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3)
console.log("23" * "2")

let n = '1' + 1; // string 11
n = n - 1; // 11 - 1
console.log(n);

n = 2 + 3 + 4 + '5' // 95 (2+3+4) + 5
n = "10"-"4"-"3"-2+"5" // "15"



// Truthy and Falsy Values
// falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('yay'));
console.log(Boolean({})); // returns true

const money = 10;

if (money) {
    console.log("Yay money :D")
}
else {
    console.log("Sad, no money D:")
}

let height;
if (height) {
    console.log("height defined");
}
else {
    console.log("height undefined")
}
*/


// Equality operators ==, ===
// == equal to
// === equal to and same type
const age = 18;
if(age === 18) {
    console.log("student graduating")
}
else {
    console.log("student not graduating")
}

prompt("What's your favourite number?")



