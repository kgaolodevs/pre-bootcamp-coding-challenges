/*
  Write a function that takes in three numbers. 
  These numbers represent the lengths of the sides of a triangle.
  The function should return the area of a triangle.
*/

var calculateArea = function (side1, side2, side3) {
  var semiPerimeter = 0.5 * (side1 + side2 + side3);
  var heronFormula =
    semiPerimeter *
    ((semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3));
  var area = Math.sqrt(heronFormula);
  if (!area) return "Impossible triangle";
  return area;
};
