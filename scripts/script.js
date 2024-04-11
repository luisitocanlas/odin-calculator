// Constants
const output = document.querySelector('#output');
const numBtns = document.querySelectorAll('#num-container button');
const clear = document.querySelector('#clear');

// Event Listeners
numBtns.forEach((button) => {
	button.addEventListener('click', () => {
		output.textContent =
			output.textContent !== '0'
				? output.textContent + button.value
				: button.value;
	});
});

clear.addEventListener('click', () => {
	output.textContent = '0';
});

// Calculator function
function operate(operation, num1, num2) {
	return operation(num1, num2);
}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;
