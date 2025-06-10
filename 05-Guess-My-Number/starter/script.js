"use strict";

/* 
/// Querying
console.log(document.querySelector(".message").textContent);

/// Selecting and Manipulating Elements
document.querySelector(".message").textContent = "Correct Number!";

// Display number
document.querySelector(".message").textContent = "Correct Number!";

// Center number
document.querySelector(".number").textContent = 13;

// Score number
document.querySelector(".score").textContent = 10;

// Gets value from guess
document.querySelector(".guess").value;
console.log(document.querySelector(".guess").value);

// Setting guess value
document.querySelector(".guess").value = 23;
*/

/// Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	console.log(typeof guess, guess);

	// When there is no number
	if (!guess) {
		// document.querySelector(".message").textContent = "No Number!";
		displayMessage("No Number!");

		// When player wins
	} else if (guess === secretNumber) {
		// document.querySelector(".message").textContent = "Correct Number!";
		displayMessage("Correct Number!");

		document.querySelector("body").style.backgroundColor = "#60b347";

		document.querySelector(".number").style.width = "30rem";

		document.querySelector(".number").textContent = secretNumber;

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// refactored
	} else if (guess != secretNumber) {
		// condition ? true : false
		if (score > 1) {
			// document.querySelector(".message").textContent = score > secretNumber ? "Too high!" : "Too low!";
			displayMessage(guess > secretNumber ? "Too high!" : "Too low!");

			score--;
		} else {
			// document.querySelector(".message").textContent = "You lost!";
			displayMessage("You Lost!");
			score = 0;
		}
	}

	/*
		// too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "Too high!";
			score--;
		} else {
			document.querySelector(".message").textContent = "You lost!";
			score = 0;
		}

		// too low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "Too low!";
			score--;
		} else {
			document.querySelector(".message").textContent = "You lost!";
			score = 0;
		}
	*/

	document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;

	// reset .message text, backgroundColor, .guess input, .number width and textContent, .score text
	// document.querySelector(".message").textContent = "Start guessing...";
	displayMessage("Start guessing...");

	document.querySelector("body").style.backgroundColor = "#222";

	document.querySelector(".guess").value = "";

	document.querySelector(".number").style.width = "15rem";

	document.querySelector(".number").textContent = "?";

	document.querySelector(".score").textContent = score;
});
