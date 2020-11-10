/*
  Convert pseudocode to actual code

  x = 1 + 1 * 2
  y = (1 + 1) * 2
  z = 1 + ( 1 * 2 )
  a =  1 + 1 * 2 / 2
  b =  (1 + 1 * 2 ) /  2

*/

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + 1 * 2;
var a = 1 + (1 * 2) / 2;
var b = (1 + 1 * 2) / 2;

console.log(x, y, z, a, b);
