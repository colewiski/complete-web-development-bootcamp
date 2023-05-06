/* Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"
instead of the number and for the multiples of five print "Buzz". For numbers which are multiples
of both three and five print "FizzBuzz". */


var bottlesOfBeer = 99;

while (bottlesOfBeer >= 0) {
    var bottleWord = "bottles";
    if (bottlesOfBeer === 1) {
        bottleWord = "bottle";
    } 
    console.log(bottlesOfBeer + " " + bottleWord + " of beer on the wall, " + bottlesOfBeer + " " + bottleWord + " of beer,");
    console.log("Take one down and pass it around, ");
	
    bottlesOfBeer--;
	
	if (bottlesOfBeer === 1) {
        bottleWord = "bottle";
    } 
		else if (bottlesOfBeer === 0) {
	        bottleWord = "bottles";
	        bottlesOfBeer = "No more";
	    }
	
    console.log(bottlesOfBeer + " " + bottleWord + " of beer on the wall. " + bottlesOfBeer + " " + bottleWord + " of beer.");
	
	if (bottlesOfBeer === "No more") {
		console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
	}
}