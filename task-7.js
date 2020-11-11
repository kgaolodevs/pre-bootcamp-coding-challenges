/*
  Write a function that takes in a number representing the temperature in Celsius 
  and returns the temperature in Fahrenheit.
*/
function convertToFahrenheit(celsius) {
  var convertedTemp = celsius * (9 / 5) + 32;

  // Returns the temperature with degree and Fahrenheit symbols
  return convertedTemp + "\u00B0" + "F";
}

/*
  Write another function that does the opposite (Fereignheit to Celsius)
*/
function convertToCelsius(fereignheit) {
  var convertedTemp = ((fereignheit - 32) * 5) / 9;

  // Returns the temperature with degree and Celsius symbols
  return convertedTemp + "\u00B0" + "C";
}
