const add = ((a, b) => a + b);//Calc functions
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a/b);

const operate = ((a, b, operator) => {
    if (operator == 'add') {
        let result = add(a, b);
        return roundNumber(result, 15);
    } else if (operator == 'subtract') {
        let result = subtract(a, b);
        return roundNumber(result, 15);
    } else if (operator == 'multiply') {
        let result = multiply(a, b);
        return roundNumber(result, 15);
    } else if (operator == 'divide') {
        if (b == 0) {
            let result = 'Nice Try Wise-guy';
            return result;
        }
        let result = divide(a, b);
        return roundNumber(result, 15);
    };
});

const roundNumber = ((num, dec) => {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
});

const clearCalc = (() => {
    str = '';
    num1 = undefined;
    num2 = undefined;
    sign = undefined;
    document.getElementById('display-value').innerHTML = '';
});

let str = '';
const display = document.getElementById('display-value');
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        str += button.value;
        document.getElementById('display-value').innerHTML = str;
    });
});

let num1, num2, sign;
const signButtons = document.querySelectorAll('.operator');
signButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (num1 == undefined && num2 == undefined && sign != undefined) {
            num1 = Number(display.textContent);
            sign = button.value;
            str = '';
        } else if (num1 != undefined) {
            num2 = Number(str);
            let result = operate(num1, num2, sign);
            document.getElementById('display-value').innerHTML = result;
            num1 = result;
            sign = button.value;
            str = '';            
        } else {
            num1 = Number(str);
            sign = button.value;
            str = '';
        }
    });
});

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', (e) => {
    if (!num1) {
        let result = str;
        document.getElementById('display-value').innerHTML = result;
        str = '';
    } else if (str == '') {
        let result = num1;
        document.getElementById('display-value').innerHTML = result;
        str = '';
    } else {
        num2 = Number(str);
        let result = operate(num1, num2, sign);
        document.getElementById('display-value').innerHTML = result;
        str = '';
    }
    num1 = undefined;
    num2 = undefined;
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalc);

const pointButton = document.querySelector('.symbol');
pointButton.addEventListener('click', (e) => {
    if (str.includes('.')) {
        str = str;
    } else str += '.';
});