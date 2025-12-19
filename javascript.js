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
let firstNumberArray = [];
let secondNumberArray = [];

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
const operatorButtons = document.querySelectorAll(".button.operator");
const display = document.querySelector(".display");
//Makes display unable to take in keyboard commands at this time.
display.readOnly = true;

function getFirstNumber() {
    firstNumber;
    numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumberArray.push(button.textContent);
        number = Number(firstNumberArray.join(""));
        firstNumber = number;
        display.value = firstNumber;
        console.log(`firstNumber = ${firstNumber}`);
    })});
    return firstNumber;
};

function getSecondNumber() {
    numberButtons.forEach((button) => {
    secondNumber;
    button.addEventListener("click", () => {
        secondNumberArray.push(button.textContent);
        number = Number(secondNumberArray.join(""));
        secondNumber = number;
        display.value = secondNumber;
        console.log(`secondNumber = ${secondNumber}`);
    })});
    return secondNumber;
};

function getOperator() {
    operatorButtons.forEach((button) => {
        operator;
        button.addEventListener("click", () => {
            operator = button.textContent;
            display.value = operator;
        })
        return operator;
    })
}

getOperator();

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    location.reload();
});