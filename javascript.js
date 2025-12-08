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

// Working on figuring out how to get numbers stored to variables.
const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".button.number");

let numberArray = [];

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        numberArray.push(button.textContent);
        number = Number(numberArray.join(""));
        display.textContent = number;
        console.log(number)
    })
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    location.reload();
})

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    operate(firstNumber, operator, secondNumber)
});
