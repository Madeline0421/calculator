class Calculator { 

    constructor(previousOperand, currentOperand, operator) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.operator = operator;
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = null;
    }

    add(num1, num2) {
        return num1 + num2;
    }
    
    subtract(num1, num2) {
        return num1 - num2;
    }
    
    multiply(num1, num2) {
        return num1 * num2;
    }
    
    divide(num1, num2) {
        return num1 / num2; 
    }
    
    // operate(operator, num1, num2) {
    //     switch(operator) {
    //         case '+':
    //             return add(num1, num2);
    //         case '-':
    //             return subtract(num1, num2);
    //         case '*':
    //             return multiply(num1, num2);
    //         case '/':
    //             return divide(num1, num2);
    //     }
    // }

    chooseOperator(operator) { 
        //if an operator is clicked, take the previous inputs and set that
        //to the operand
    }

    appendNumber(number) { 
        this.currentOperand += number.toString(); 
    }

}



let items = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.number');
let display = document.querySelector('#display');
let operators = document.querySelectorAll('.operator');
let equalSign = document.querySelector('#equal-sign');
let clear = document.querySelector('#clear');

let calculator = new Calculator();

calculator.currentOperand = 7;

calculator.appendNumber(5);
console.log(calculator.currentOperand);

items.forEach((item) => {
    item.addEventListener('click', () => {
        display.textContent += item.textContent;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        calculator.operator = operator.textContent;
    });
});

numbers.forEach((number) => { 
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerHTML);
        console.log(calculator.currentOperand);
    });
});
