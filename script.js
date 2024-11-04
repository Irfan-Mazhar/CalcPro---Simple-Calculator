const display = document.getElementById("display");
var type = 0;
function appendtodisplay(input) {
  if (type == 1) {
    display.value = "";
    type = 0;
  }
  if (input == "x") {
    display.value += "*";
  } else {
    display.value += input;
  }
}

function cleardisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
    type = 1;
  } catch (error) {
    display.value = "-_+           ";
    type = 1;
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function sqrt() {
  try {
    display.value = Math.sqrt(parseFloat(display.value));
    type = 1;
  } catch (error) {
    display.value = "Error";
    type = 1;
  }
}

function percentage() {
  display.value = eval(display.value) / 100;
  type = 1;
}
