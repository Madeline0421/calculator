class Calculator { 

    constructor(previousOperand, currentOperand, operator) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.operator = operator;
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = '';
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
    
    calculate() {
        this.previousOperand = parseInt(this.previousOperand);
        this.currentOperand = parseInt(this.currentOperand);
        let total;
        switch(this.operator) {
            case '+':
                total = this.add(this.previousOperand, this.currentOperand);
                break;
            case '-':
                total = this.subtract(this.previousOperand, this.currentOperand);
                break;
            case '*':
                total = this.multiply(this.previousOperand, this.currentOperand);
                break;
            case '/':
                total = this.divide(this.previousOperand, this.currentOperand);
                break;
        }
        this.previousOperand = total; 
        this.currentOperand = '';
        this.operator = '';
        return total;
    }

    chooseOperator(operator) { 
        if (this.previousOperand == '') { 
            this.previousOperand = this.currentOperand;
            this.operator = operator;
            this.currentOperand = '';
        } else { 
            this.operator = operator;
        }
    }

    appendNumber(number) { 
        this.currentOperand += number.toString(); 
    }

}

let numbers = document.querySelectorAll('.number');
let display = document.querySelector('#display');
let operators = document.querySelectorAll('.operator');
let equalSign = document.querySelector('#equal-sign');
let clear = document.querySelector('#clear');

let calculator = new Calculator('', '', null);
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        calculator.chooseOperator(operator.innerHTML);
    });
});

numbers.forEach((number) => { 
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerHTML);
    });
});

equalSign.addEventListener('click', () => {
    console.log("prev:" + calculator.previousOperand);
    console.log("current: " + calculator.currentOperand);
    console.log("operator: " + calculator.operator);
    console.log(calculator.calculate());
    console.log("prev:" + calculator.previousOperand);
    console.log("current: " + calculator.currentOperand);
    console.log("operator: " + calculator.operator);
});

clear.addEventListener('click', () => { 
    calculator.clear();
});