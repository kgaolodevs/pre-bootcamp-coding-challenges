const processBtn = document.querySelector(".container__process--btn");
const result = document.querySelector(".container__values--print");

processBtn.addEventListener("click", () => {
  var x = 1 + 1 * 2;
  var y = (1 + 1) * 2;
  var z = 1 + 1 * 2;
  var a = 1 + (1 * 2) / 2;
  var b = (1 + 1 * 2) / 2;

  result.innerHTML = `
  <h3>Results</h3>
  <h3> x = ${x},  y = ${y}, z = ${z}, a = ${a}, b = ${b} </h3>`;
});
