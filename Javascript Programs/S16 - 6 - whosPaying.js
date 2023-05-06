/* Write a program that will pick a person to buy lunch at random from an array of names. */

function whosPaying(names) {
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];    
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); //0-0.9999
    var randomPerson = names[randomPersonPosition];
    
        
    return (randomPerson + " is going to buy lunch today!");
}