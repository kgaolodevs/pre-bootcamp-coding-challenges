/*
  Make a function to convert any number into hours and minutes.
  (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)
*/

var convertToTime = function (number) {
  var hours = 0;
  var minutes = 0;

  // Subtracts  60 from the number provided, which represents an hour. Until 60 can no longer be subtracted
  // The remainder is allocated to minutes
  for (var i = number; i >= 60; i -= 60) {
    hours++;
  }

  minutes = i;

  // Formats the output to display the appropriate time
  switch (true) {
    case number === 60:
      return `1 hour, 0 minutes`;

    case hours === 1 && minutes === 1:
      return `${hours} hour, ${minutes} minute`;

    case hours > 1 && minutes > 1:
      return `${hours} hours, ${minutes} minutes`;

    case hours > 1 && minutes === 1:
      return `${hours} hours, ${minutes} minute`;

    case hours === 1 && minutes > 1:
      return `${hours} hour, ${minutes} minutes`;

    default:
      return `${hours} hours, ${minutes} minutes`;
  }
};
