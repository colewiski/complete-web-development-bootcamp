//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  var height = (height * height); // height should be input in meters, weight should be in kg
  var bmi = Math.round(weight / height);
  return bmi;
}

console.log("Your BMI is " + bmiCalculator(108, 1.8) + "%.");

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number. */

// HINT:
// console.log(Math.round(0.9));
// // Expected output: 1

// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// // Expected output: 6 6 5

// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// // Expected output: -5 -5 -6