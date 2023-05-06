function lifeInWeeks(age) {
  var currentAge = prompt("Enter the year you were born to find out how much time you have left to live until you're 90!");
  var weeksLeft = ((52 * 90) - (52 * currentAge));
  var monthsLeft = ((12 * 90) - (12 * currentAge));
  var daysLeft = ((365 * 90) - (365 * currentAge));

console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
}

lifeInWeeks(38);

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(38);