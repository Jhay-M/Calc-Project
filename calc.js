const add = ((a, b) => a + b);//Calc functions
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a/b);

const operate = ((a, b, operator) => {
    if (operator == add || operator == subtract || operator == multiply || operator == divide) {
        return operator(a, b);
    };
});

let str = '';
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (str != '') {
            str = '';
        }
        str += button.value;
        document.getElementById('display-value').innerHTML = str;
    });
});

let num1, num2, operator;
const signButtons = document.querySelectorAll('.operator');
signButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        num1 = str;
        operator = button.value;
    })
})