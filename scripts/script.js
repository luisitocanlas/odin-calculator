// Constants
const BLACK = '#000000';
const BLUE = '#14213d';
const ORANGE = '#fca311';
const PLATINUM = '#e5e5e5';
const WHITE = '#ffffff';

const output = document.querySelector('#output');
const numBtns = document.querySelectorAll('#num-container button');
const opBtns = document.querySelectorAll('#operation-container button');

// Initial Startup
output.textContent = '0';

// Global Variables
let num1 = 0;
let num2 = 0;
let op = '';

// Event Listeners
numBtns.forEach((button) => {
	button.addEventListener('click', () => {
		if (
			output.textContent === '+' ||
			output.textContent === '-' ||
			output.textContent === '*' ||
			output.textContent === '/'
		) {
			output.textContent = '';
		}

		output.textContent =
			output.textContent !== '0'
				? output.textContent + button.value
				: button.value;
	});
});

opBtns.forEach((button) => {
	button.addEventListener('click', () => {
		const btnId = button.id;

		switch (btnId) {
			case 'clear':
				output.textContent = '0';
				break;

			case 'divide':
				num1 = +output.textContent;
				op = 'divide';
				output.textContent = '/';
				break;

			case 'multiply':
				num1 = +output.textContent;
				op = 'multiply';
				output.textContent = '*';
				break;

			case 'subtract':
				num1 = +output.textContent;
				op = 'subtract';
				output.textContent = '-';
				break;

			case 'add':
				num1 = +output.textContent;
				op = 'add';
				output.textContent = '+';
				break;

			case 'equals':
				if (
					op === 'add' ||
					op === 'subtract' ||
					op === 'multiply' ||
					op === 'divide'
				) {
					num2 = +output.textContent;
					const result = operate(op, num1, num2);
					output.textContent = result.toString();
					op = '';
				}
				break;
		}
	});
});

// Calculator function
function operate(operation, num1, num2) {
	switch (operation) {
		case 'add':
			return add(num1, num2);

		case 'subtract':
			return subtract(num1, num2);

		case 'multiply':
			return multiply(num1, num2);

		case 'divide':
			return divide(num1, num2);
	}
}

const add = (a, b) => (a + b).toFixed(2);

const subtract = (a, b) => (a - b).toFixed(2);

const multiply = (a, b) => (a * b).toFixed(2);

const divide = (a, b) => (a / b).toFixed(2);
