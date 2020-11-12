var side_1 = document.querySelector("#side-1-input");
var side_2 = document.querySelector("#side-2-input");
var side_3 = document.querySelector("#side-3-input");
const processBtn = document.querySelector(".container__process--btn");
const results = document.querySelector(".container__values--print");

processBtn.addEventListener("click", () => {
  var side1 = parseInt(side_1.value);
  var side2 = parseInt(side_2.value);
  var side3 = parseInt(side_3.value);
  calculateArea(side1, side2, side3);
});

function calculateArea(side1, side2, side3) {
  // Formula is calculated first using semi-perimeter and a part of the heron formula
  var semiPerimeter = 0.5 * (side1 + side2 + side3);
  var heronFormula =
    semiPerimeter *
    ((semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3));
  var area = Math.sqrt(heronFormula); // Result is square rooted
  if (!area) {
    results.textContent = `Impossible triangle`;
    return;
  } // Will run if numbers cannot produce a realistic triangle
  results.textContent = `Area: ${area}`;
  return;
}
