var x = document.querySelector("#x-input");
var y = document.querySelector("#y-input");
const processBtn = document.querySelector(".container__process--btn");
const userInputs = document.querySelector(".container__values--print");
const results = document.querySelector(".container__values--print-2");

processBtn.addEventListener("click", () => {
  var num1 = parseInt(x.value);
  var num2 = parseInt(y.value);
  userInputs.textContent = `You entered: x = ${num1}, y = ${num2}`;
  num1 = num1 + 3;
  num2 = num2 + num1;
  results.textContent = `New values: x = ${num1}, y = ${num2}`;
});
