    
function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
const operation = document.getElementById("operation").value;
// Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result;
        switch (operation){
            case "add":
                result = num1 + num2;
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1,num2);
                break;
            default:
                result = "Unbekannte Operation !!!";
        }
        
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    debugger; // Beobachte hier, ob Division durch 0 etc.
    if (b === 0) {
    return "Division durch 0 nicht erlaubt";
    }
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
        