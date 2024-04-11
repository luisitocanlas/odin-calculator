// Constants
const output = document.querySelector('#output');
const numBtns = document.querySelectorAll('#num-container button');
const opBtns = document.querySelectorAll('#operation-container button');

// Initial Startup
output.textContent = '0';

// Global Variables
let num1 = 0;
let num2 = 0;
let op = '';
let result = 0;

// Event Listeners
numBtns.forEach((button) => {
	button.addEventListener('click', () => {
		if (['+', '-', '*', '/'].includes(output.textContent)) {
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
				num1 = '';
				num2 = '';
				op = '';
				output.textContent = '0';
				break;

			case 'divide':
			case 'multiply':
			case 'subtract':
			case 'add':
				if (op && num2 !== '') {
					num2 = +output.textContent;
					output.textContent = operate(op, num1, num2);
				}
				num1 = +output.textContent;
				op = btnId;
				output.textContent = button.textContent;
				break;

			case 'equals':
				if (op && num2 !== '') {
					num2 = +output.textContent;
					output.textContent = operate(op, num1, num2);
					op = '';
				}
				break;
		}
	});
});

// Calculator function
function operate(operation, a, b) {
	switch (operation) {
		case 'add':
			return (a + b).toFixed(2);

		case 'subtract':
			return (a - b).toFixed(2);

		case 'multiply':
			return (a * b).toFixed(2);

		case 'divide':
			return b !== 0 ? (a / b).toFixed(2) : 'Error';
	}
}
