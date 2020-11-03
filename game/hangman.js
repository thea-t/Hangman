var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

//how many wrong answers player gave
var wrongAnswerCount = 0;

//how many correct letters player found
var correctLetterCount = 0;

var gameIsRunning = true;

//distance between letters
var distance = 50;

window.onload = function () {
    word = prompt("(Player 1) Enter the word: ");
    context.font = '30px serif';


    //draw the "_" under each word
    for (var i = 0; i < word.length; i++) {

        context.fillText("_", distance * i, 310);
    }

    //run the function with delay
    setTimeout(checkLetter, 50);
}

function checkLetter() {

    var nextLetter = prompt("(Player 2) Enter a letter: ");
    var letterFound = false;

    //loops through every letter in the word and draws the correct one
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == nextLetter) {
            context.fillText(nextLetter, distance * i, 300);
            letterFound = true;
            correctLetterCount++;
        }
    }
    //checks if all letters are found 
    if (word.length == correctLetterCount) {
        gameIsRunning = false;
        setTimeout(function () { alert("You win!"); }, 50);
    }

    if (letterFound == false) {
        wrongAnswer();
    }

    if (gameIsRunning) {
        setTimeout(checkLetter, 100);
    }
}
//if the letter is wrong, draw the man elements
function wrongAnswer() {

    wrongAnswerCount++;
    if (wrongAnswerCount == 1) {

        context.beginPath();
        context.arc(100, 75, 30, 0, 2 * Math.PI);
        context.stroke();
    }
    else if (wrongAnswerCount == 2) {
        context.fillRect(100, 105, 1, 100);
    }
    else if (wrongAnswerCount == 3) {
        context.beginPath();
        context.moveTo(100, 130);
        context.lineTo(150, 155);
        context.stroke();
    }
    else if (wrongAnswerCount == 4) {
        context.beginPath();
        context.moveTo(100, 130);
        context.lineTo(50, 155);
        context.stroke();
    }
    else if (wrongAnswerCount == 5) {
        context.beginPath();
        context.moveTo(100, 205);
        context.lineTo(150, 255);
        context.stroke();
    }
    else if (wrongAnswerCount == 6) {
        context.beginPath();
        context.moveTo(100, 205);
        context.lineTo(50, 255);
        context.stroke();

        gameIsRunning = false;

        setTimeout(function () { alert("You lose!"); }, 50);

    }
}
