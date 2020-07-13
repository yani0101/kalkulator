//untuk klik angka
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
	console.log(event.target.value);	
	});
});

const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
	calculatorScreen.value = number;
};

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		updateScreen(event.target.value);
	});
});

let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number;
	}	
};

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});


//untuk menjalankan operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		console.log(event.target.value);
	});
});

const inputOperator = (operator) => {
	// if (calculationOperator === '') {
		
	// }
	prevNumber = currentNumber;
	calculationOperator = operator;
	currentNumber = '';
};

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});


//untuk menjalankan button =
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	console.log('equal button is pressed');
	calculate();
	updateScreen(currentNumber);
});



const calculate = () => {
	let result = '';
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = prevNumber - currentNumber;
			break;
		case "*":
			result = prevNumber * currentNumber;
			break;
		case "/":
			result = prevNumber / currentNumber;
			break;
		default:
			return;
	};
	currentNumber = result;
	calculationOperator = '';
};


//untuk mengaktifkan button AC
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	console.log('AC button is pressed');
	clearAll();
	updateScreen(currentNumber);
});

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
};


//untuk mengaktifkan tombol decimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return;
	}
	currentNumber += dot;
};
