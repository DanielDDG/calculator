const box = document.querySelector('.box');
const buttons = document.querySelectorAll('button');
let displayValue = null;
let operator = null;
let num1 = 0;
let num2 = 0;
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

buttonArray = Array.from(buttons);
buttonArray.forEach(button => button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
        box.textContent = null;
    } else if (button.textContent === 'C') {
        box.textContent = box.textContent.slice(0, -1);
    } else if (button.textContent === '=') {
        if (box.textContent.includes('+')) {
            num1 = box.textContent.split('+')[0];
            num2 = box.textContent.split('+')[1];
            operator = '+';
            box.textContent = operate(num1, operator, num2);
        } else if (box.textContent.includes('-')) {
            num1 = box.textContent.split('-')[0];
            num2 = box.textContent.split('-')[1];
            operator = '-';
            box.textContent = operate(num1, operator, num2);
        } else if (box.textContent.includes('÷')) {
            num1 = box.textContent.split('÷')[0];
            num2 = box.textContent.split('÷')[1];
            operator = '÷';
            box.textContent = operate(num1, operator, num2);
        } else if (box.textContent.includes('%')) {
            num1 = box.textContent.split('%')[0];
            operator = '%'; 
            box.textContent = operate(num1, operator, num2);
        } else if (box.textContent.includes('x')) {
            num1 = box.textContent.split('x')[0];
            num2 = box.textContent.split('x')[1];
            operator = 'x'; 
            box.textContent = operate(num1, operator, num2);
        }
    } else {
        box.textContent += button.textContent;
    }
}));