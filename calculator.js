/*

const box = document.querySelector('.box');
const buttons = document.querySelectorAll('button');
let operator = null;
let num1 = 0;
let num2 = 0;
let global = '';
let makeNull = false;
let activeOperator = false;
box.textContent = null;

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function percent(number) {
    return number / 100;
}

function operate(num1, operator, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === 'x') return multiply(num1, num2);
    if (operator === '÷') return divide(num1, num2);
    if (operator === '%') return percent(num1);
}

function calculate() {

    if (operator === '%') {
        num1 = box.textContent;
        box.textContent = operate(num1, operator, num2);
        activeOperator = true;
    }
    if (activeOperator === true) {
        num2 = box.textContent;
        global = operate(num1, operator, num2);
        box.textContent = global;
        activeOperator = false;
    } else {
        num1 = box.textContent;
        makeNull = true;
        activeOperator = true;
    }
}

function reset() {
    box.textContent = null;
    makeNull = false;
    activeOperator = false;
    num1 = 0;
    num2 = 0;
}

buttonArray = Array.from(buttons);
buttonArray.forEach(button => button.addEventListener('click', () => {


    if (button.textContent === 'AC') {
        reset();
    } else if (button.textContent === 'C') {
        box.textContent = box.textContent.slice(0, -1);
    } else if (button.textContent === '+') {
        operator = '+';
        calculate();
    } else if (button.textContent === '-') {
        operator = '-';
        calculate();
    } else if (button.textContent === 'x') {
        operator = 'x';
        calculate();
    } else if (button.textContent === '÷') {
        operator = '÷';
        calculate();
    } else if (button.textContent === '%') {
        operator = '%';
        calculate();
    } else if (button.textContent === '=') {
        if (activeOperator === true) {
            num2 = box.textContent;
            box.textContent = operate(num1, operator, num2);
            activeOperator = false;
        }
    } else {
        if (makeNull === true) {
            box.textContent = null;
            box.textContent += button.textContent;
            makeNull = false;
        }  else {
            box.textContent += button.textContent;
        }
    }
}));

*/

const box = document.querySelector('.box');
const buttons = document.querySelectorAll('button');
let displayValue = null;
let operator = null;
let num1 = 0;
let num2 = 0;
let activeOperator = false;
let activeSymbol = false;
box.textContent = displayValue;

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function percent(number) {
    return number / 100;
}

function operate(num1, operator, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === 'x') return multiply(num1, num2);
    if (operator === '÷') return divide(num1, num2);
    if (operator === '%') return percent(num1);
}

function calculate() {
    if (activeSymbol === true) {
        num2 = box.textContent;
        box.textContent = operate(num1, operator, num2);
        activeSymbol = false;
    }
    activeOperator = true;
    activeSymbol = true;
}

buttonArray = Array.from(buttons);
buttonArray.forEach(button => button.addEventListener('click', () => {


    if (button.textContent === 'AC') {
        box.textContent = null;
        activeOperator = false;
        activeSymbol = false;
        num1 = 0;
        num2 = 0;
    } else if (button.textContent === 'C') {
        box.textContent = box.textContent.slice(0, -1);
    } else if (button.textContent === '+') {
        calculate();
        num1 = box.textContent;
        operator = '+';
    } else if (button.textContent === '-') {
        calculate();
        num1 = box.textContent;
        operator = '-';
    } else if (button.textContent === 'x') {
        calculate();
        num1 = box.textContent;
        operator = 'x';
    } else if (button.textContent === '÷') {
        calculate();
        num1 = box.textContent;
        operator = '÷';
    } else if (button.textContent === '%') {
        calculate();
        num1 = box.textContent;
        operator = '%';
    } else if (button.textContent === '=') {
        num2 = box.textContent;
        box.textContent = operate(num1, operator, num2);
    } else {
        if (activeOperator === true) {
            box.textContent = null;
            box.textContent += button.textContent;
            activeOperator = false;
        } else {
            box.textContent += button.textContent;
        }
    }
}));