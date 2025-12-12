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
    if (num2 === 0) {
        return "Really?";
    } else {
    return num1 / num2;
}};

let number;
let getNumbers;
let firstNumberArray = [];
let firstUserNumber;
let firstNumber;

let secondNumberArray = [];
let secondUserNumber;
let secondNumber;

let userOperator;
let operator;

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

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");

userOperator = function() {
    operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //Below code would display the operator symbol and assign the operator symbol to whatever was displayed. Turning this off for now to see if it helps with calculator functionality.
        // display.value = button.textContent;
        // operator = display.value;
        operator = button.textContent;
        console.log(`operator = ${operator}`);
    })
})};

userOperator();

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