let calculator_buttons = document.querySelectorAll("button.calculator_buttons");
let calculator_painel = document.querySelector("input#calculator_painel");

//add onclick event on the calculator buttons
for (let position = 17; position >= 0; position--) {
  calculator_buttons[position].addEventListener("click", () =>
    add_value(calculator_buttons[position].value)
  );
}
//add number on the calculator painel based in clicked button value
function add_value(value) {
  calculator_painel.placeholder += value;
}
//remove one number in the calculator painel
function backspace() {
  calculator_painel.placeholder = calculator_painel.placeholder.substring(
    0,
    calculator_painel.placeholder.length - 1
  );
}

//calculate the string value of the calculator painel
function result() {
  try {
    eval(calculator_painel.placeholder);
  } catch (err) {
    alert("valor inválido :(");
  }
  calculator_painel.placeholder = eval(calculator_painel.placeholder);
}
