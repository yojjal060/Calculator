const display = document.getElementById('input-field');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    const expression = display.value;
    try {
        const result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error: Invalid expression';
    }
}
