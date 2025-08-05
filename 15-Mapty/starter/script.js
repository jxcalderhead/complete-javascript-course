"use strict";
/**
 * Initializes the map using the Leaflet library at the user's current geolocation.
 * Adds a marker and popup to the map at the user's location.
 * Handles geolocation errors by alerting the user.
 *
 * @function
 * @returns {void}
 * @see {@link https://leafletjs.com/} for the Leaflet library documentation.
 */

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/////////////////////////////////////////////
//// Project

class Workout {
	date = new Date();
	id = (Date.now() + "").slice(-10);
	clicks = 0;

	constructor(coords, distance, duration) {
		this.coords = coords; // [lat, lng]
		this.distance = distance; // km
		this.duration = duration; // min
	}

	_setDescription() {
		// prettier-ignore
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		this.description = `${this.type[0].toUpperCase()}${this.type.slice(
			1
		)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
	}

	click() {
		this.clicks++;
	}
}

class Running extends Workout {
	type = "running";

	constructor(coords, distance, duration, cadence) {
		super(coords, distance, duration);
		this.cadence = cadence;
		this.calcPace();
		this._setDescription();
	}

	calcPace() {
		// min/km
		this.pace = this.duration / this.distance;
		return this.pace;
	}
}

class Cycling extends Workout {
	type = "cycling";

	constructor(coords, distance, duration, elevationGain) {
		super(coords, distance, duration);
		this.elevationGain = elevationGain;
		this.calcSpeed();
		this._setDescription();
	}

	calcSpeed() {
		// km/h
		this.speed = this.distance / (this.distance / 60);
		return this.speed;
	}
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Running([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

/////////////////////////////////////////////////////
// Application Architecture

/** * @type {HTMLFormElement}*/
const form = document.querySelector(".form");

const containerWorkouts = document.querySelector(".workouts");

const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
	/** @type {import("leaflet").Map} */
	#map;

	#mapZoomLevel = 13;
	#mapEvent;

	#workouts = [];

	constructor() {
		// User's position
		this._getPosition();

		// Get data from local storage
		this._getLocalStorage();

		// Attach event handlers
		form.addEventListener("submit", this._newWorkout.bind(this));
		inputType.addEventListener("change", this._toggleEvelationField);
		containerWorkouts.addEventListener(
			"click",
			this._moveToPopup.bind(this)
		);
	}

	_getPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this._loadMap.bind(this),
				function () {
					alert(`Could not get your position`);
				}
			);
		}
	}

	_loadMap(position) {
		const {latitude} = position.coords;
		const {longitude} = position.coords;
		console.log(latitude, longitude);

		// https://www.google.com/maps/@latitude,longitude
		console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

		const coords = [latitude, longitude];

		/** @type {import("leaflet").Map} */
		this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

		// console.log(map);

		L.tileLayer("https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.#map);

		// Handling clicks on map
		this.#map.on("click", this._showForm.bind(this));

		this.#workouts.forEach((work) => {
			this._renderWorkoutMarker(work);
		});
	}

	_showForm(mapE) {
		this.#mapEvent = mapE;
		form.classList.remove("hidden");
		inputDistance.focus();
	}

	_hideForm() {
		// empty inputs
		inputDistance.value = "";
		inputDuration.value = "";
		inputCadence.value = "";
		inputElevation.value = "";

		form.style.display = "none";
		form.classList.add("hidden");
		setTimeout(() => (form.style.display = "grid"), 1000);
	}

	_toggleEvelationField() {
		inputElevation
			.closest(".form__row")
			.classList.toggle("form__row--hidden");
		inputCadence
			.closest(".form__row")
			.classList.toggle("form__row--hidden");
	}

	_newWorkout(e) {
		const validInputs = (...inputs) =>
			inputs.every((input) => Number.isFinite(input));

		const allPositive = (...inputs) => inputs.every((input) => input > 0);

		e.preventDefault();

		// Get data from form
		const type = inputType.value;
		const distance = +inputDistance.value;
		const duration = +inputDuration.value;
		// get coords
		const {lat, lng} = this.#mapEvent.latlng;
		let workout;

		// if activity running, create running object
		if (type === "running") {
			const cadence = +inputCadence.value;

			// check if data is valid
			if (
				!validInputs(distance, duration, cadence) ||
				!allPositive(distance, duration, cadence)
			)
				return alert("Inputs have to be positive numbers");

			workout = new Running([lat, lng], distance, duration, cadence);
		}

		// if activity cycling, create cycling object
		if (type === "cycling") {
			const elevation = +inputElevation.value;

			// check if data is valid
			if (
				!validInputs(distance, duration, elevation) ||
				!allPositive(distance, duration)
			)
				return alert("Inputs have to be positive numbers");

			workout = new Cycling([lat, lng], distance, duration, elevation);
		}

		// Add new object to workout array
		this.#workouts.push(workout);

		// Render workout on map as marker
		this._renderWorkoutMarker(workout);

		// Render workout on list
		this._renderWorkout(workout);

		// clear inputs
		this._hideForm();

		// Set local storage to all workouts
		this._setLocalStorage();
	}

	_renderWorkoutMarker(workout) {
		L.marker(workout.coords)
			.addTo(this.#map)
			.bindPopup(
				L.popup({
					autoClose: false,
					maxWidth: 250,
					minWidth: 100,
					closeOnClick: false,
					className: `${workout.type}-popup`,
				})
			)
			.setPopupContent(
				`${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${
					workout.description
				}`
			)
			.openPopup();
	}

	_renderWorkout(workout) {
		let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${
					workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
				}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>`;

		if (workout.type === "running")
			html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
            </li>`;

		if (workout.type === "cycling")
			html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
            </li>`;

		// inserting html
		form.insertAdjacentHTML("afterend", html);
	}

	_moveToPopup(e) {
		const workoutEl = e.target.closest(".workout");
		// console.log(workoutEl);

		if (!workoutEl) return;

		const workout = this.#workouts.find(
			(work) => work.id === workoutEl.dataset.id
		);

		// console.log(workout);

		this.#map.setView(workout.coords, this.#mapZoomLevel, {
			animate: true,
			pan: {
				duration: 1,
			},
		});

		// using the public interface
		// workout.click();
	}

	_setLocalStorage() {
		localStorage.setItem("workouts", JSON.stringify(this.#workouts));

		// local strong breaks the proto chain
	}

	_getLocalStorage() {
		const data = JSON.parse(localStorage.getItem("workouts"));

		// console.log(data);

		if (!data) return;

		this.#workouts = data;

		this.#workouts.forEach((work) => {
			this._renderWorkout(work);
		});
	}

	reset() {
		localStorage.removeItem("workouts");
		location.reload();
	}
}

const app = new App();

//////////////////////////////////////////////////
////// Lectures //////

////////////////////////////////////////////////
//// How to Plan a Web Project

/* 
1. user stories - description from users perspective

2. features

3. flow chart - what we will build

4. Architecture - how we will build it

5. development - implementation

User Stories
 - Common Format: as a [type of user], I want [an action] so that [a benefit]
 - Example: As a user, I want to log my running workouts with location, distance, time, pace, and steps/minute, so I can keep a log of all my running
 
Features
 - Map where user clicks to add new workout
 - Geolocation to display map at current location
 - Form to input distance, time, pace, steps/minute
 - Form to input distance, time, speed, elevation gain
 - display all workouts in a list
 - display all workouts on the map
 - Store workout data in browser using local storage API
 - load and read from saved data

Flowchart
 - Refine throughout implementations

Architecture
 - Experiment with code
 - Begin implemeneting
*/
