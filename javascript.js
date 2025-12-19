function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

let firstNumber;
let operator = "";
let secondNumber;

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add (num1, num2);
    } else if (operator === "-") {
        return subtract (num1, num2);
    } else if (operator === "x") {
        return multiply (num1, num2);
    } else {
        return divide (num1, num2);
    }
};

const numberButtons = document.querySelectorAll(".button.number");
const display = document.querySelector("#display");
let firstNumberArray = [];
let secondNumberArray = [];

function getFirstNumber() {
    numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumberArray.push(button.textContent);
        number = Number(firstNumberArray.join(""));
        firstNumber = number;
        console.log(`firstNumber = ${firstNumber}`);
    })});
};

function getSecondNumber() {
    numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        secondNumberArray.push(button.textContent);
        number = Number(secondNumberArray.join(""));
        secondNumber = number;
        console.log(`firstNumber = ${secondNumber}`);
    })});
};