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
        display.textContent = '';
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
        }        
        console.log(this.previousOperand);
        console.log(this.currentOperand);
        console.log(this.operator);
        
        this.previousOperand = total; 
        this.currentOperand = '';
        this.operator = '';

        addDisplay("=" + total);
        return total;
    }

    appendOperator(operator) { 
        if (this.previousOperand == '') { 
            this.previousOperand = this.currentOperand;
            this.operator = operator;
            this.currentOperand = '';
        } else { 
            this.operator = operator;
        }
        addDisplay(operator);
    }

    appendNumber(number) { 
        this.currentOperand += number.toString(); 
        addDisplay(number);
    }

    isValid() {
        return this.currentOperand != '' && this.previousOperand != '' && this.operator != '';
    }

    convertOperator(operator) {
        switch (operator) { 
            case "*" :
                return '×';
            case '/':
                return '÷';
            case '-':
                return '−';
            case '+': 
                return '+';
        }
    }

    deleteNumber() {
        this.currentOperand = '';
    }

}

// const aliasKeys = {
//     "ctrl" : 17,
//     "shift" : 16,
//     "multiply" : 106,
//     "add" : 107,
//     "subtract" : 109,
//     "decimal-point" : 110,
//     "divide" : 111,
//     "equal-sign" : 187,
// }
const aliasKeys = [];
for (let i = 0; i <= 9; i++) {
    aliasKeys[i] = i;
}

// function checkKey(key) { 
//     return key in keys;
// }

// function checkKeys() {
//     let keylist = arguments;
//     console.log("check");
//     for (let i = 0; i < keylist.length; i++) {
//         console.log(keylist[i]);
//     }
//     return true;
// }


let numbers = document.querySelectorAll('.number');
let display = document.querySelector('#display');
let operators = document.querySelectorAll('.operator');
let equalSign = document.querySelector('#equal-sign');
let clear = document.querySelector('#clear');

document.addEventListener('keydown', addCharacters, false); 


function addCharacters(e) {
    if (e.key >= 0 && e.key <= 9) { 
        calculator.appendNumber(e.key);
    } else if (e.key == '*' || e.key == '/' || e.key == '+' || e.key == '-') {
        calculator.appendOperator(calculator.convertOperator(e.key));
    } else if (e.key == '=' || e.key == 'Enter') {
        calculator.calculate();
    } else if (e.key == 'Backspace') {
        calculator.deleteNumber();
        removeDisplay();
    } else if (e.key == "C" || e.key == "c") { 
        calculator.clear(); 
    } else if (e.key == ".") {
        calculator.appendNumber(e.key);
    } else if (e.key == "(") {
        
    }
    
}

function addDisplay(value) {
    display.textContent += value;
}

function removeDisplay(value) {
    display.textContent = display.textContent.toString().slice(0, -1);
}

let calculator = new Calculator('', '', null);
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