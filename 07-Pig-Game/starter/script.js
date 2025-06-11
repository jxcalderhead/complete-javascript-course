"use strict";

// roll, hold, new game btns
// total and current for P1 and P2
//

// would be way better to use OOP principles ._.

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent =
		currentScore;

	activePlayer = activePlayer === 0 ? 1 : 0;

	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
	if (playing) {
		// roll, display, check if 1
		let dice = Math.trunc(Math.random() * 6) + 1;
		console.log(dice);

		diceEl.classList.remove("hidden");
		diceEl.src = `dice-${dice}.png`;

		if (dice != 1) {
			// current score += dice
			currentScore += dice;

			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			switchPlayer();
		}
	}
});

btnHold.addEventListener("click", function () {
	if (playing) {
		scores[activePlayer] += currentScore;

		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		if (scores[activePlayer] >= 100) {
			// .player--winner
			playing = false;

			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove("player--active");

			diceEl.classList.add("hidden");
		} else {
			switchPlayer();
		}
	}
});

// Challenge completed successfully
btnNew.addEventListener("click", function () {
	// Resetting conditions
	console.log("new btn clicked", activePlayer);

	playing = true;
	currentScore = 0;
	scores = [0, 0];

	// removes winner - throws error
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.remove("player--winner");

	// resets active player
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.add("player--active");

	activePlayer = 0;

	// removes dice
	diceEl.classList.add("hidden");

	// reset current scores and scores in DOM
	score0El.textContent = 0;
	score1El.textContent = 0;

	current0El.textContent = 0;
	current1El.textContent = 0;
});
