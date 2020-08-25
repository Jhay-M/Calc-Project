const add = ((a, b) => a + b);//Calc functions
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a/b);

const operate = ((a, b, operator) => {
    if (operator == add || operator == subtract || operator == multiply || operator == divide) {
        return operator(a, b);
    };
});

