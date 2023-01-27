const buttons = document.querySelectorAll('button');
const dot = document.getElementById('dot');
const box = document.querySelector('.box');
let activeOperator = false;
let activeSymbol = false;
let operator = null;
let num1 = 0;
let num2 = 0;
let detector = 0;
box.textContent = 0;

function add(a, b) {
    return (parseFloat(a) + parseFloat(b)).round(3);
}

function subtract(a, b) {
    return (parseFloat(a) - parseFloat(b)).round(3);
}

function multiply(a, b) {
    return (parseFloat(a) * parseFloat(b)).round(3);
}

function divide(a, b) {
    return (parseFloat(a) / parseFloat(b)).round(3);
}

function percent(number) {
    return (parseFloat(number) / 100).round(3);
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
    dot.disabled = false;
    box.textContent = 0;
    activeOperator = false;
    activeSymbol = false;
    num1 = 0;
    num2 = 0;
    detector = 0;
}

Number.prototype.round = function(n) {
    const d = Math.pow(10, n);
    return Math.round((this + Number.EPSILON) * d) / d;
}

buttonArray = Array.from(buttons);
buttonArray.forEach(button => button.addEventListener('click', () => {

    if (detector === 0) {
        box.textContent = null;
        detector++;
    }

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

    if (box.textContent === 'Infinity') alert('You cannot divide by zero!');
    box.textContent.includes('.') ? dot.disabled = true : dot.disabled = false;
}));

document.addEventListener('keydown', (event) => {
    let key = event.key;
    console.log(key);
    if (key === 'Delete') document.getElementById('reset').click();
    if (key === 'Backspace') document.getElementById('delete').click();
    if (key === 'Enter') document.getElementById('equals').click();
    if (key === '%') document.getElementById('percent').click();
    if (key === '/') document.getElementById('divide').click();
    if (key === '*') document.getElementById('times').click();
    if (key === '-') document.getElementById('minus').click();
    if (key === '+') document.getElementById('plus').click();
    if (key === '.') document.getElementById('dot').click();
    if (key === '0') document.getElementById('0').click();
    if (key === '1') document.getElementById('1').click();
    if (key === '2') document.getElementById('2').click();
    if (key === '3') document.getElementById('3').click();
    if (key === '4') document.getElementById('4').click();
    if (key === '5') document.getElementById('5').click();
    if (key === '6') document.getElementById('6').click();
    if (key === '7') document.getElementById('7').click();
    if (key === '8') document.getElementById('8').click();
    if (key === '9') document.getElementById('9').click();
});