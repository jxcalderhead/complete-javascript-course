"use strict";

const btn = document.querySelector(".btn-country");

/** @type {HTMLDivElement} */
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
	countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
	const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
					+data.population / 1_000_000
				).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${
					data.languages[0].name
				}</p>
                <p class="country__row"><span>💰</span>${
					data.currencies[0].name
				}</p>
            </div>
        </article>
        `;
	countriesContainer.insertAdjacentHTML("beforeend", html);

	countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/{name}

// https://countries-api-836d.onrender.com/countries/name/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

/////////////////////////////////////////////
//// Asynchronous Javascript. AJAX and APIs
// AJAX = Asynchronous Javascript And XML

/////////////////////////////////////////////
//// Our first AJAX Call: XMLHttpRequest
//// Welcome to Callback Hell

// const renderCountry = function (data, className = "") {
// 	const html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
// 					+data.population / 1_000_000
// 				).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${
// 					data.languages[0].name
// 				}</p>
//                 <p class="country__row"><span>💰</span>${
// 					data.currencies[0].name
// 				}</p>
//             </div>
//         </article>
//         `;
// 	countriesContainer.insertAdjacentHTML("beforeend", html);

// 	countriesContainer.style.opacity = 1;
// };

/*
const getCountryAndNeighbor = function (country) {
	// AJAX call country 1
	const request = new XMLHttpRequest();
	request.open("GET", `https://restcountries.com/v2/name/${country}`);

	request.send();

	request.addEventListener("load", function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);
		renderCountry(data);

		// render country 1

		// Get neighbor country (2)
		const neighbor = data.borders?.[0];

		console.log(neighbor);

		if (!neighbor) return;

		const request2 = new XMLHttpRequest();
		request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);

		request2.send();

		request2.addEventListener("load", function () {
			const data2 = JSON.parse(this.responseText);
			console.log(data2);

			renderCountry(data2, "neighbor");
		});
	});
};

// getCountryAndNeighbor("portugal");
getCountryAndNeighbor("usa");

// callback Hell
setTimeout(() => {
	console.log("1 second passed");
	setTimeout(() => {
		console.log("2 second passed");
		setTimeout(() => {
			console.log("3 second passed");
		}, 1000);
	}, 1000);
}, 1000);

*/

/////////////////////////////////////////////
//// Promises and the Fetch API

/*
Definitions
Promise: an object that is used as a placeholder for the future result of an asynchronous operation

Promise: a container for a future value

Promises can be chained to escape callback hell

The promise lifecycle: 
 - pending: before the value is available
 - settled: asynchronous task has finished
    - fulfilled: success, value is available 
    - rejected: an error happened


Fetch API returns promise
\/ \/ \/
Then we consume the promise

*/

/*
// Old way
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// New way
const request = fetch("https://restcountries.com/v2/name/portugal");
console.log(request);


/////////////////////////////////////////////
//// Consuming Promises

// const getCountryData = function (country) {
// 	const request = fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then(function (response) {
// 			console.log(request);
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 			renderCountry(data[0]);
// 		});
// };

const getCountryData = function (country) {
	const request = fetch(`https://restcountries.com/v2/name/${country}`)
		.then((response) => response.json())
		.then((data) => renderCountry(data[0]));
};

getCountryData("portugal");
*/

/////////////////////////////////////////////
//// Chaining promises
//// Handling Rejected Promises
//// Throwing Errors Manually

// add .catch(callback) to the end of the promise chain

/*
const getJSON = function (url, errorMsg = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};
*/

// const getCountryData = function (country) {
// 	const request = fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then((response) => {
// 			console.log(response);

// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => {
// 			renderCountry(data[0]);

// 			const neighbour = data[0].borders?.[0];
// 			neighbour = "sdfsfdsf";

// 			if (!neighbour) return;

// 			// Country 2
// 			return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// 		})
// 		.then((response) => {
// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => renderCountry(data, "neighbour"))
// 		.catch((err) => {
// 			console.error(`${err}`);
// 			renderError(`Something went wrong: ${err.message}`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

/*
const getCountryData = function (country) {
	getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
		.then((data) => {
			renderCountry(data[0]);

			const neighbour = data[0].borders?.[0];

			if (!neighbour) return;

			// Country 2
			return getJSON(
				`https://restcountries.com/v2/alpha/${neighbour}`,
				`Country not found`
			);
		})
		.then((data) => renderCountry(data, "neighbour"))
		.catch((err) => {
			console.error(`${err}`);
			renderError(`Something went wrong: ${err.message}`);
		})
		.finally(() => {
			countriesContainer.style.opacity = 1;
		});
};

btn.addEventListener("click", function () {
	getCountryData("portugal");
});

getCountryData("dsfafsfsd");
*/

///////////////////////////////////////////
//// Coding Challenge 1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating

3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise chain and log errors to the console

5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.

7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
	// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

	fetch(
		`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
	)
		.then((response) => {
			if (!response.ok) throw new Error(`Error: ${response.status}`);

			return response.json();
		})
		.then((data) => {
			console.log(`You are in ${data.countryName}`);

			return fetch(
				`https://restcountries.com/v2/name/${data.countryName}`
			);
		})
		.then((response) => {
			if (!response.ok) throw new Error(`Error: ${response.status}`);

			return response.json();
		})
		.then((data) => {
			renderCountry(data[0]);
		})
		.catch((error) => console.log(`An error occured: ${error}`));
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
*/

/*
///////////////////////////////////////////
//// Asynchronous Behind the Scenes: The Event Loop
// Lecture only

///////////////////////////////////////////
//// The Event Loop in Practice

console.log("Test start");

setTimeout(() => console.log("0 sec timer"), 0);

Promise.resolve("Resolved promise 1").then((res) => console.log(res));

Promise.resolve("Resolved promise 2").then((res) => {
	for (let i = 0; i < 10000000; i++) {}

	console.log(res);
});

console.log("Test end");

// start -> end -> resolved 1 -> resolved 2 -> timer


///////////////////////////////////////////
//// Building a Simple Promise

const lotteryPromise = new Promise(function (resolve, reject) {
	console.log("Lotter draw is happening");
	setTimeout(function () {
		if (Math.random() >= 0.5) {
			resolve("You Win! 💵");
		} else {
			reject(new Error("You lost!"));
		}
	}, 2000);
});

lotteryPromise
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

wait(2)
	.then(() => {
		console.log("I waited for 1 seconds");
		return wait(1);
	})
	.then(() => {
		console.log("I waited for 2 seconds");
		return wait(1);
	})
	.then(() => {
		console.log("I waited for 3 seconds");
		return wait(1);
	});

// static methods on promise objects
Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.log(x));
*/

///////////////////////////////////////////
//// Promisifying the Geolocation API

/*
const getPosition = function () {
	return new Promise(function (resolve, reject) {
		// navigator.geolocation.getCurrentPosition(
		// 	(position) => resolve(position),
		// 	(err) => reject(err)
		// );

		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
	// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

	getPosition()
		.then((pos) => {
			console.log(pos.coords);
			const {latitude: lat, longitude: lng} = pos.coords;

			return fetch(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
			);
		})
		.then((response) => {
			if (!response.ok) throw new Error(`Error: ${response.status}`);

			return response.json();
		})
		.then((data) => {
			console.log(`You are in ${data.countryName}`);

			console.log(data);

			return fetch(
				`https://restcountries.com/v2/alpha/${data.countryCode}`
			);
		})
		.then((response) => {
			if (!response.ok) throw new Error(`Error: ${response.status}`);

			return response.json();
		})
		.then((data) => {
			console.log(data);
			renderCountry(data);
		})
		.catch((error) => console.log(`An error occured: ${error}`));
};

btn.addEventListener("click", whereAmI);
*/

///////////////////////////////////////////
//// Coding Challenge 2
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
let currentImg;

const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
};

const createImage = function (imgPath) {
	return new Promise((resolve, reject) => {
		const img = document.createElement("img");
		img.src = imgPath;

		img.addEventListener("load", () => {
			imgContainer.append(img);
			resolve(img);
		});

		img.addEventListener("error", (error) => {
			console.error(error);
			reject(new Error("Image loading error"));
		});
	});
};

createImage("img/img-1.jpg")
	.then((img) => {
		currentImg = img;
		console.log("Img 1 loaded");
		return wait(2);
	})
	.then(() => {
		currentImg.style.display = "none";
		console.log("Img 1 hidden");
		return createImage("img/img-2.jpg");
	})
	.then((img) => {
		currentImg = img;
		return wait(2);
	})
	.then(() => {
		currentImg.style.display = "none";
	})
	.catch((error) => console.log(error));
*/

/*
/////////////////////////////////////////
//// Consuming Promises with Async/Await
//// Error Handling With try...catch
//// Returning Values from Async Functions

const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = async function (country) {
	try {
		// Geolocation
		const pos = await getPosition();
		const {latitude: lat, longitude: lng} = pos.coords;

		// Reverse geocoding
		const geo = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
		);

		if (!geo.ok) throw new Error("Problem getting location");

		const dataGeo = await geo.json();

		// country data
		const res = await fetch(
			`https://restcountries.com/v2/alpha/${dataGeo.countryCode}`
		);

		if (!res.ok) throw new Error("Problem getting location");
		const data = await res.json();

		// Render
		renderCountry(data);

		console.log(dataGeo);
		return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
	} catch (err) {
		console.error(err.message);
		renderError(`\${err.message}`);

		// reject promise returned from async function
		// error propagation
		throw err;
	}
};

console.log("1: will get location");

// const city = whereAmI();
// console.log(city) // logs a pending promise

// mixing old and new way
// whereAmI()
// 	.then((city) => console.log(city))
// 	.catch((err) => console.error(err))
// 	.finally(() => console.log("3: finished getting location"));

// async iife (immediately invoked function expression)
(async function () {
	try {
		const city = await whereAmI();
		console.log(city);
	} catch (error) {
		console.error(error);
	}
	console.log("3: finished getting location");
});

// try {
// 	let y = 1;
// 	const x = 2;
// 	x = 3;
// } catch (err) {
// 	console.error(err.message);
// }

*/

/////////////////////////////////////////
//// Running Promises in Parallel
/*

const get3Countries = async function (c1, c2, c3) {
	try {
		// const [data1] = await getJSON(
		// 	`https://restcountries.com/v2/name/${c1}`
		// );
		// const [data2] = await getJSON(
		// 	`https://restcountries.com/v2/name/${c2}`
		// );
		// const [data3] = await getJSON(
		// 	`https://restcountries.com/v2/name/${c3}`
		// );

		const data = await Promise.all([
			getJSON(`https://restcountries.com/v2/name/${c1}`),
			getJSON(`https://restcountries.com/v2/name/${c2}`),
			getJSON(`https://restcountries.com/v2/name/${c3}`),
		]);

		console.log(data.map((d) => d[0].capital));
	} catch (error) {
		console.error(error);
	}
};

get3Countries("portugal", "canada", "tanzania");



/////////////////////////////////////////
//// Other Promise Combinators: race, allSettled, and any

// any promise settled
// Promise.race([])
(async function () {
	const res = await Promise.race([
		getJSON(`https://restcountries.com/v2/name/italy`),
		getJSON(`https://restcountries.com/v2/name/egypt`),
		getJSON(`https://restcountries.com/v2/name/mexico`),
	]);
	console.log(res[0]);
})();

const timeout = function (sec) {
	return new Promise(function (_, reject) {
		setTimeout(() => {
			reject(new Error("Request took too long"));
		}, sec * 1000);
	});
};

// Ensures requests don't take too long
Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(1)])
	.then((data) => console.log(data[0]))
	.catch((err) => console.error(err));

// Promise.allSettled([])
// returns all settled promises (including rejected)
// Promise.all short circuits on any rejected
Promise.allSettled([
	Promise.resolve("Success"),
	Promise.resolve("Success"),
	Promise.reject("Failure"),
	Promise.resolve("Success"),
])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Promise.any()
// Returns first fulfilled promise (ignores rejected promises)
Promise.any([
	Promise.resolve("Success"),
	Promise.resolve("Success"),
	Promise.reject("Failure"),
	Promise.resolve("Success"),
])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Promise.all and Promise.race are the most commonly used
*/

/////////////////////////////////////////
//// Coding Challenge 3

let currentImg;

const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
};

const createImage = function (imgPath) {
	return new Promise((resolve, reject) => {
		const img = document.createElement("img");
		img.src = imgPath;

		img.addEventListener("load", () => {
			imgContainer.append(img);
			resolve(img);
		});

		img.addEventListener("error", (error) => {
			console.error(error);
			reject(new Error("Image loading error"));
		});
	});
};

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
*/

const loadNPause = async function () {
	try {
		let img = await createImage("img/img-1.jpg");
		currentImg = img;
		console.log("Img 1 loaded");
		await wait(2);

		currentImg.style.display = "none";
		console.log("Img 1 hidden");
		img = await createImage("img/img-2.jpg");

		console.log("Img 2 loaded");
		currentImg = img;
		await wait(2);

		currentImg.style.display = "none";
		console.log("Img 2 hidden");
	} catch (error) {
		console.error(error);
	}
};

// loadNPause();

const loadAll = async function (imgArr) {
	try {
		const imgs = imgArr.map((img) => createImage(img));
		const imgElements = await Promise.all(imgs);

		console.log(imgElements);
		imgElements.forEach((img) => img.classList.add("parallel"));
		imgElements.forEach((img) => console.log(img));
	} catch (error) {
		console.error(error);
	}
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

/* 
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
