// exporting modules
console.log("Exporting module");

// blocking code
// console.log("Start fetching users");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log("Finish fetching users");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
	cart.push({product, quantity});
	console.log(`${quantity}, ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

// usually when only exporting one thing
export default function (product, quantity) {
	cart.push({product, quantity});
	console.log(`${quantity}, ${product} added to cart`);
}
