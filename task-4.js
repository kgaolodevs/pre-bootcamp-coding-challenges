/*
  Write a function that takes 2 numbers as input.
  If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true.
  Otherwise return false
*/

function myFunction(num1, num2) {
  var sum = num1 + num2;
  if (num1 === 3 || num2 === 3 || sum.toString().indexOf("3") > -1) return true;
  return false;
}
