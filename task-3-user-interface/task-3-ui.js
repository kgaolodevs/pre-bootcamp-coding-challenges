var x = document.querySelector("#x-input");
var y = document.querySelector("#y-input");
const processBtn = document.querySelector(".container__process--btn");
const results = document.querySelector(".container__values--print");

processBtn.addEventListener("click", () => {
  var num1 = parseInt(x.value);
  var num2 = parseInt(y.value);
  myFunction(num1, num2);
});

function myFunction(num1, num2) {
  if (num1 === 65 || num2 === 65 || num1 + num2 === 65) {
    results.textContent = `True`;
    return;
  }
  results.textContent = `False`;
  return;
}
