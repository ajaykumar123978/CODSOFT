let currentInput = "";
let operator = "";
let firstOperand = null;

function clearDisplay() {
    document.getElementById("display").value = "";
    currentInput = "";
    operator = "";
    firstOperand = null;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function addDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = "";
    } else {
        calculateResult();
        operator = op;
    }
}

function calculateResult() {
    if (operator && currentInput !== "") {
        const secondOperand = parseFloat(currentInput);
        switch (operator) {
            case "+":
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case "-":
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case "*":
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case "/":
                currentInput = (firstOperand / secondOperand).toString();
                break;
        }
        updateDisplay();
        operator = "";
        firstOperand = parseFloat(currentInput);
        currentInput = "";
    }
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
