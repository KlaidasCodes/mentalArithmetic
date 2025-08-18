// user presses a button to pick a timer
timeAmount = 60;

// user presses a button to pick a difficulty
var difficultyNow = "Easy";


// user selects all the arithmetic signs they want used in the test

difficultyToLength = {
    "vEasy": 10,
    "Easy": 100,
    "Medium": 1000,
    "Hard": 10000,
}



function pickRandomNumber(difficulty_level) {
    var multiplier = difficultyToLength[difficultyNow] 
    var randomNumber = Math.ceil((Math.random()) * multiplier);
    console.log(randomNumber);
}





pickRandomNumber()