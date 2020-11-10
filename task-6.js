/*
  Write a function that takes in three numbers and returns the maximum number.
  Do this without using any builtin methods.
  Write your own logic from scratch.
*/

var findMax = function (num1, num2, num3) {
  var nums = [num1, num2, num3];
  var maxNumber = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }

  return maxNumber;
};

/*
  BONUS: How can you change the code so it can take in any number of numbers?
*/

var getMaxNumber = function (...nums) {
  var maxNumber = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }

  return maxNumber;
};
