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


console.log(items[0]);

items.forEach((item) => {
    console.log(item.textContent);
    item.addEventListener('click', () => {
        display.textContent += item.textContent;
    });
});