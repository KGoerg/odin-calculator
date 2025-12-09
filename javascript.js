function add(num1, num2) {
    return num1 + num2
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

let number;
let firstNumber;
let operator;
let secondNumber;
let numberArray = [];

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
};

const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");

// function getFirstNumber() {
//     numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         numberArray.push(button.textContent);
//         firstNumber = Number(numberArray.join(""));
//         display.textContent = firstNumber;
//         console.log(firstNumber)
//     })
// })};

// getFirstNumber();

//trying to rewrite the above as a function expression that returns the number we want under firstNumber variable, to be used for operating.
firstNumber = function() {
    numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        numberArray.push(button.textContent);
        number = Number(numberArray.join(""));
        display.value = number;
        console.log(number)
    })
    return number;
})};

console.log(firstNumber());

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent;
    })
});

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    location.reload();
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    operate(firstNumber, operator, secondNumber)
});
