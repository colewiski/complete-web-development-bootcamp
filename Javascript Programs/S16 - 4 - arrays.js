//When brackets == usually a collection data type, like array. Use [] when using arrays.

var guestList = ["Cole", "Monica", "Branden", "Mike"];

var guestName = prompt("Enter your name to see if you're on the guest list.");

if (guestList.includes(guestName)) {
    alert("Welcome! You're on the guest list, please enter.")
} else {
    alert("You're not on the guestlist. Sorry, no entry for you.")
}