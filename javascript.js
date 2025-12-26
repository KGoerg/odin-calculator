let firstNumber;
let operator;
let secondNumber;
let result;
let firstNumberArray = [];
let secondNumberArray = [];

function add (num1, num2) {
    result = num1 + num2;
    // firstNumber = result;
    secondNumberArray = [];
    return result;
}

function subtract (num1, num2) {
    result = num1 - num2;
    // firstNumber = result;
    secondNumberArray = [];
    return result;
}

function multiply (num1, num2) {
    result = num1 * num2;
    // firstNumber = result;
    secondNumberArray = [];
    return result;
}

function divide (num1, num2) {
    result = num1 / num2;
    // firstNumber = result;
    secondNumberArray = [];
    return result;
}

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

function getNumbers() {
    numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (secondNumber === undefined && operator === undefined) {
            firstNumberArray.push(button.textContent);
            number = Number(firstNumberArray.join(""));
            firstNumber = number;
            display.value = firstNumber;
            console.log(`firstNumber = ${firstNumber}`);
        } else {
            secondNumberArray.push(button.textContent);
            number = Number(secondNumberArray.join(""));
            secondNumber = number;
            display.value = secondNumber;
            console.log(`secondNumber = ${secondNumber}`);
        }
    })});
};

getNumbers();

function useOperator() {
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (result !== undefined) {
                operator = button.textContent;
                display.value = operate(result, operator, secondNumber);
            } else if (firstNumber !== undefined && secondNumber !== undefined) {
                display.value = operate(firstNumber, operator, secondNumber);
                operator = button.textContent;
            } else {
            operator = button.textContent;
            display.value = operator;
            }
            console.log(`operator = ${operator}`);
        })
    })
}

useOperator();

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    display.value = operate(firstNumber, operator, secondNumber);
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    location.reload();
});