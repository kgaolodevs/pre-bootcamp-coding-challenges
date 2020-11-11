/*
Write a function that takes in a string and then prints out all the vowels in the string.
Make sure it can deal with capital letters and small letters.
*/

function findVowels(str) {
  var vowels = "aeiou";
  var text = str.toLowerCase(); // Converts the given string to lowercase, to handle different cases
  var output = "";

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (text[i] === vowels[j]) output += text[i] + ","; //Searches the string for vowels and adds it to the final output
    }
  }

  console.log(output);
}
