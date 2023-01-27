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

function setOperator(value) {
    num1 = box.textContent;
    operator = value;
}

function calculate(value) {

    if (activeSymbol === true) {
        num2 = box.textContent;
        box.textContent = operate(num1, operator, num2);
        activeSymbol = false;
    }

    if (value === '%') {
        num1 = box.textContent;
        operator = value;
        box.textContent = operate(num1, operator, num2);
    } else {
        setOperator(value);
        activeOperator = true;
        activeSymbol = true;
    }

}

function reset() {
    box.textContent = null;
    activeOperator = false;
    activeSymbol = false;
    num1 = 0;
    num2 = 0;
}

buttonArray = Array.from(buttons);
buttonArray.forEach(button => button.addEventListener('click', () => {


    if (button.textContent === 'AC') reset();
    else if (button.textContent === 'C') {box.textContent = box.textContent.slice(0, -1);} 
    else if (button.textContent === '+') {calculate(button.textContent);}
    else if (button.textContent === '-') {calculate(button.textContent);}
    else if (button.textContent === 'x') {calculate(button.textContent);}
    else if (button.textContent === '÷') {calculate(button.textContent);}
    else if (button.textContent === '%') {calculate(button.textContent);}
    else if (button.textContent === '=') {
        if (activeSymbol === true) {
            num2 = box.textContent;
            box.textContent = operate(num1, operator, num2);
            activeSymbol = false;
        }
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