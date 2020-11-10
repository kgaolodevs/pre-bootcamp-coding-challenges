/*
  Write a function that takes 2 numbers as input. 
  If either of the numbers is 65, OR if the sum of the numbers is 65 then return true
  Otherwise return false.
*/

var fn = function (a, b) {
  if (a === 65 || b === 65 || a + b === 65) return true;
  return false;
};
