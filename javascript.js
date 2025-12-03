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

const display = document.querySelector(".display");
//Number buttons & decimal
const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => {
    display.textContent = "0";
    });

const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", () => {
    display.textContent = "1";
    });

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", () => {
    display.textContent = "2";
    });

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", () => {
    display.textContent = "3";
    });

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", () => {
    display.textContent = "4";
    });

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", () => {
    display.textContent = "5";
    });

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", () => {
    display.textContent = "6";
    });

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", () => {
    display.textContent = "7";
    });

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", () => {
    display.textContent = "8";
    });

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", () => {
    display.textContent = "9";
    });

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    display.textContent = ".";
    });

