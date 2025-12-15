let number;
let firstNumberArray = [];
let firstNumber;
let secondNumberArray = [];
let secondNumber;
let operator;
let result;

//Function expressions
let getNumbers;
let getUserOperator;

function add(num1, num2) {
    return result = num1 + num2
};

function subtract(num1, num2) {
    return result = num1 - num2;
};

function multiply(num1, num2) {
    return result = num1 * num2;
};

function divide(num1, num2) {
    if (num2 === 0) {
        return "Really?";
    } else {
    return result = num1 / num2;
}};

function operate(num1, action, num2) {
    if (action === "+") {
        return add(num1, num2);
    } else if (action === "-") {
        return subtract(num1, num2);
    } else if (action === "X") {
        return multiply(num1, num2);
    } else if (action === "/") {
        return divide(num1, num2);
    }
};

const display = document.querySelector(".display");
//Makes display unable to take in keyboard commands at this time.
display.readOnly = true;

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");

getUserOperator = function() {
    operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.value = button.textContent;
        if (secondNumber !== undefined) {
            display.value = operate(firstNumber, operator, secondNumber);
        }
        operator = button.textContent;
        console.log(`operator = ${operator}`);
    })
})};

getUserOperator();

getNumbers = function() {
    numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === undefined) {
            firstNumberArray.push(button.textContent);
            number = Number(firstNumberArray.join(""));
            display.value = number;
            firstNumber = number;
            console.log(`firstNumber = ${firstNumber}`);
        } else {
            secondNumberArray.push(button.textContent);
            number = Number(secondNumberArray.join(""));
            display.value = number;
            secondNumber = number;
            console.log(`secondNumber = ${secondNumber}`)
        }
    })
})};

getNumbers();

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    location.reload();
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    display.value = operate(firstNumber, operator, secondNumber);
});