const display = document.getElementById("display");
// Function to add to input field
function addToInput(input) {
  display.value += input;
}
// declaration for the clear button
function clearInput() {
  display.value = "";
}
// declaration for calculate btn
function calculate() {
  display.value = eval(display.value);
}
