
// Function to display the value on the screen
function display(val) {
    document.getElementById("result").innerText += val;
}

// Function to clear the screen
function reset() {
    document.getElementById("result").innerText = "";
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById("result").innerText);
        document.getElementById("result").innerText = result;
    } catch (error) {
        document.getElementById("result").innerText = "Error";
    }
}