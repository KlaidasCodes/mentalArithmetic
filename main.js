// user presses a button to pick a timer
timeAmount = 60;

// user presses a button to pick a difficulty
var difficultyNow = "Easy";


// user selects all the arithmetic signs they want used in the test
const arrOfSigns = ["addition", "subtraction"];
// arrOfSigns = ["addition", "subtraction", "multiplication", "division"];





const difficultyToLength = {
    "vEasy": 10,
    "Easy": 100,
    "Medium": 1000,
    "Hard": 10000,
}





function adding(num1, num2) {
    return num1 + num2
}

function subtracting(num1, num2) {
    return num1 - num2
}

function multiplying(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}


const wordToSign = {
    "addition": adding,
    "subtraction": subtracting,
    "multilpication": multiplying,
    "division": division,
}

function pickRandomNumber(difficultyLevel) {
    var multiplier = difficultyToLength[difficultyLevel] 
    var randomNumber = Math.ceil((Math.random()) * multiplier);
    console.log(randomNumber);
    return randomNumber
}

function pickRandomSign(signArray) {
    var randomIndex = Math.floor(Math.random() * signArray.length);
    return signArray[randomIndex]
}


function creatingCalculation(difficultyLevel) {
    var number1 = pickRandomNumber(difficultyLevel);
    var number2 = pickRandomNumber(difficultyLevel);
    var result = wordToSign["addition"](number1, number2);
    console.log(result);

}


creatingCalculation("Easy")