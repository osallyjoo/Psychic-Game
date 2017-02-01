// VARIABLES
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var computerChoice = GetRandomCharacter();
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesSoFar = "";

RestartGame();

function GetRandomCharacter() {

    // get random number to access array index
    var randomIndex = Math.random() * alphabet.length;

    // convert random index to non-decimal value
    randomIndex = Math.floor(randomIndex);
    console.log("Computer choice: " + alphabet[randomIndex]);

    // use number to return a value from array
    return alphabet[randomIndex];
}

function RestartGame() {
    console.log("Restarting the game...");

    computerChoice = GetRandomCharacter();
    guessesSoFar = "";
    guesses = 9;

    ReplaceElementContent("player-wins", wins);
    ReplaceElementContent("player-losses", losses);
    ReplaceElementContent("guesses-left", guesses);
    ReplaceElementContent("guesses-so-far", guessesSoFar);
}

function ReplaceElementContent(id, content) {
    document.getElementById(id).innerHTML = content;
}

document.onkeyup = function(event) {
    // get user inputted key. Or... String.fromCharCode(event.keyCode).toLowerCase();
    var userInput = event.key.toLowerCase();

    // Check if user input is okay
    if (alphabet.indexOf(userInput) === -1) {
        return;
    }

    console.log("User chose: " + userInput);

    // store the value in guessesSoFar
    if (guessesSoFar === "") {
        guessesSoFar = userInput;

    } else {
        guessesSoFar = guessesSoFar + ", " + userInput;
    }
    console.log("User chose: " + guessesSoFar);
    ReplaceElementContent("guesses-so-far", guessesSoFar);

    // compare user guess to computer choice
    if (userInput === computerChoice) {
        wins++;
        console.log("User has won!");
        ReplaceElementContent("player-wins", wins);

        // Restart the game
        RestartGame();

    } else {
        guesses--;
        console.log("User lost one guess");
        //document.getElementById("guesses-left").innerHTML = !guesses;
        ReplaceElementContent("guesses-left", guesses);
    }

    // Determine if the user has ran out of guesses
    if (guesses === 0) {
        losses++;
        console.log("User has lost the game!");
        ReplaceElementContent("player-losses", losses);

        // Restart the game
        RestartGame();
    }

};