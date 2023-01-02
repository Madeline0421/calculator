function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2; 
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

let items = document.querySelectorAll('button');
let display = document.querySelector('#display');
let operators = document.querySelectorAll('.operator');
let equalSign = document.querySelector('#equal-sign');
let clear = document.querySelector('#clear');
let arr;
let operand;

items.forEach((item) => {
    item.addEventListener('click', () => {
        display.textContent += item.textContent;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operand = operator.textContent;
    });
});

equalSign.addEventListener('click', () => {
    const arr = display.textContent.split(/[+-/*=]/);
    console.log(arr[0]);
    console.log(arr[1]);
    let num1 = arr[0];
    let num2 = arr[1];
    display.textContent += (operate(operand, num1, num2));
    display.textContent += "\n";
});

clear.addEventListener('click', () => {
    display.textContent = "";
})