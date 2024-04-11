// Constants

// querySelectors
let output = document.querySelector('#output');

// Event Listeners

// Calculator function
function operate(operation, num1, num2) {
	return operation(num1, num2);
}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;
