/*
  Make a function that takes two strings as input, and outputs the common characters/letters that they share.
  (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)
*/

function findCommonChar(input1, input2) {
  // Converts inputs to lowercase
  var str1 = input1.toLowerCase();
  var str2 = input2.toLowerCase();
  var output = "Common letters: ";

  // Compares characters of inputs to one another, and if found, adds them to the ouput string
  for (var i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        output += str1[i] + ",";
        break;
      }
    }
  }

  console.log(output);
}

findCommonChar("house", "computers");
