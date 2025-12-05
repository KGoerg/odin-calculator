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

const display = document.querySelector("#display");
function getFirstNumber() {
    document.querySelector('.operateButtons')
    .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('.button.number')) {
      let value = target.textContent;
      firstNumber = document.querySelector('.display').value += value
    }
    console.log(firstNumber);
  });
}

getFirstNumber();

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    location.reload();
})