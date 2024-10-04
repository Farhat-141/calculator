
// Function to display the value on the screen
function display(val) {
    document.getElementById("result").value += val;
}

// Function to clear the screen
function reset() {
    document.getElementById("result").value = "";
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById("result").innerText);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
