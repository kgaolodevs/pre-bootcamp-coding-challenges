/*
  Write a function that takes in three numbers. 
  These numbers represent the lengths of the sides of a triangle.
  The function should return the area of a triangle.
*/

function calculateArea(side1, side2, side3) {
  // Formula is calculated first using semi-perimeter and a part of the heron formula
  var semiPerimeter = 0.5 * (side1 + side2 + side3);
  var heronFormula =
    semiPerimeter *
    ((semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3));
  var area = Math.sqrt(heronFormula); // Result is square rooted
  if (!area) return "Impossible triangle"; // Will run if numbers cannot produce a realistic triangle
  return area;
}
