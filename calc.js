const add = ((a, b) => a + b);//Calc functions
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a/b);

const operate = ((a, b, operator) => {
    if (operator == 'add') {
        return add(a, b);
    } else if (operator == 'subtract') {
        return subtract(a, b);
    } else if (operator == 'multiply') {
        return multiply(a, b);
    } else if (operator == 'divide') {
        return divide(a, b);
    };
});

let str = '';
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
        if (num1 != undefined) {
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
    num2 = Number(str);
    let result = operate(num1, num2, sign);
    document.getElementById('display-value').innerHTML = result;
    str = '';
});