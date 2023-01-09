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
        display.innerHTML = '';
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

    exponent(num1, num2) {
        return num1 ** num2;
    }
    
    calculate() {
        if (this.isValid()) {
            this.previousOperand = parseFloat(this.previousOperand);
            this.currentOperand = parseFloat(this.currentOperand);
            let total;
            switch(this.operator) {
                case '+':
                    total = this.add(this.previousOperand, this.currentOperand);
                    break;
                case '−':
                    total = this.subtract(this.previousOperand, this.currentOperand);
                    break;
                case '×':
                    total = this.multiply(this.previousOperand, this.currentOperand);
                    break;
                case '÷':
                    total = this.divide(this.previousOperand, this.currentOperand);
                    break;
                case '^':
                    total = this.exponent(this.previousOperand, this.currentOperand);
                    break;
            }        
            
            this.previousOperand = total; 
            this.currentOperand = '';
            this.operator = '';
    
            this.removeFullDisplay();
            this.addDisplay(total);
            return Math.round((total + Number.EPSILON) * 100) / 100;
        }
    }

    appendOperator(operator) { 
        if (!this.operator == '') {
            return;
        }
        if (this.previousOperand == '') { 
            this.previousOperand = this.currentOperand;
            this.operator = operator;
            this.currentOperand = '';
        } else { 
            this.operator = operator;
        }
        this.addDisplay(operator);
    }

    appendNumber(number) { 
        this.currentOperand += number.toString(); 
        this.addDisplay(number);
    }

    isValid() {
        return this.currentOperand != '' && this.previousOperand != '' && this.operator != '';
    }

    convertOperator(operator) {
        switch (operator) { 
            case '*' :
                return '×';
            case '/':
                return '÷';
            case '-':
                return '−';
            case '+': 
                return '+';
            case '×':
                return '×';
            case '÷':
                return '÷';
            case '^':
                return '^';
        }
    }

    deleteNumber() {
        this.currentOperand = '';
    }

    addDisplay(value) {
        display.innerHTML += value;
    }
    
    removeValueDisplay(value) {
        display.innerHTML = display.innerHTML.toString().slice(0, -1);
    }

    removeFullDisplay() {
        display.innerHTML = '';
    }

    changeSign() {
        this.currentOperand *= -1;
        display.innerHTML = this.currentOperand;
    }

}

const aliasKeys = [];
for (let i = 0; i <= 9; i++) {
    aliasKeys[i] = i;
}

let numbers = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let operators = document.querySelectorAll('.operator');
let equalSign = document.querySelector('#equal-sign');
let clear = document.querySelector('#clear');
let changeSign = document.querySelector('#change-sign');

let calculator = new Calculator('', '', null);

document.addEventListener('keydown', addCharacters, false); 
display.innerHTML = '';


function addCharacters(e) {
    if (e.key >= 0 && e.key <= 9) { 
        calculator.appendNumber(e.key);
    } else if (e.key == '*' || e.key == '/' || e.key == '+' || e.key == '-') {
        calculator.appendOperator(calculator.convertOperator(e.key));
    } else if (e.key == '=' || e.key == 'Enter') {
        calculator.calculate();
    } else if (e.key == 'Backspace') {
        calculator.deleteNumber();
        calculator.removeValueDisplay();
    } else if (e.key == "C" || e.key == "c") { 
        calculator.clear(); 
    } else if (e.key == ".") {
        calculator.appendNumber(e.key);
    } else if (e.key == "^") {
        calculator.appendOperator(e.key);
    } 
    
}


operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        calculator.appendOperator(calculator.convertOperator(operator.innerHTML));
    });
});

numbers.forEach((number) => { 
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerHTML);
    });
});

equalSign.addEventListener('click', () => {
    calculator.calculate();
});

clear.addEventListener('click', () => { 
    calculator.clear();
});

changeSign.addEventListener('click', () => {
    calculator.changeSign();
})