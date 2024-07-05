let display = document.querySelector("#result");
function show(input) {
  display.value += input;
}
function clearD() {
  display.value = "";
}
function calculate() {
  try {
    const result = evalExpression(display.value);

    display.value = result;

    return result;
  } catch (error) {
    display.value = "Error";
    return "Error";
  }
}

function evalExpression(expression) {
  const tokens = expression.match(/(\d+(\.\d+)?|\+|\-|\*|\/|%)/g);

  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
        break;
      case "%":
        result %= operand;
        break;
    }
  }

  return result;
}
document.addEventListener("keydown", function(e) {
    if (e.key === "Backspace") {
        clearD();
    } else if (e.key === "=" || e.key === "Enter") {
        e.preventDefault();
        calculate();
    } else if(/[0-9]|\+|-|\*|%|\/|\./.test(e.key)){
        show(e.key);
    }

});
const lightToggle = document.querySelector("#toggle-light");
const multiToggle = document.querySelector("#toggle-multi");
const body = document.body;
const h1 = document.querySelector("h1");

lightToggle.addEventListener("click", function() {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    lightToggle.innerHTML = "🌗";
    lightToggle.style.backgroundColor = "white";
    h1.style.color = "black"
  } else {
    lightToggle.innerHTML = "☀️";
    lightToggle.style.backgroundColor = "black";
    h1.style.color = "white"
  }
});

multiToggle.addEventListener("click", function() {
  body.classList.toggle("light-multi");
  if (body.classList.contains("light-multi")) {
    multiToggle.innerHTML = "🛑";
    multiToggle.style.backgroundColor = "#ffffff";
  } else {
    multiToggle.innerHTML = "🌈";
    multiToggle.style.backgroundColor = "black";
  }
});
