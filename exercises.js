console.log("connected")

// user presses a button to pick a timer
const timeAmount = localStorage.getItem("duration");
// timeAmount = 60;

// user presses a button to pick a difficulty
var difficultyNow = "Easy";

var difficultyDigit1 = localStorage.getItem("digit1");
var difficultyDigit2 = localStorage.getItem("digit2");
console.log("This is the digit1: " + difficultyDigit1);
console.log("This is the digit2: " + difficultyDigit2);


var userPoints = 0;
// user selects all the arithmetic signs they want used in the test
const arrOfSigns = JSON.parse(localStorage.getItem("actions"));
// const arrOfSigns = ["addition", "subtraction"];
// arrOfSigns = ["addition", "subtraction", "multiplication", "division"];

console.log("Signs that will be used: " + typeof(arrOfSigns));
console.log("Duration: " + timeAmount);

const difficultyToLength = {
    "10": 1,
    "100": 2,
    "1000": 3,
    "10000": 4
}

const wordToSign = {
    "addition": "+",
    "subtraction": "-",
    "multiplication": "x",
    "division": "/",
}



function adding(num1, num2, difficultyLevel) {
    return num1 + num2
}

function subtracting(num1, num2, difficultyLevel) {
    return num1 - num2
}

function multiplying(num1, num2, difficultyLevel) {
    return num1 * num2
}

function division(num1, num2, difficultyLevel) {
    while (num2 == 0) {
        num2 = pickRandomNumber(difficultyLevel);
    }
    return num1 / num2
}


const wordToSignFunc = {
    "addition": adding,
    "subtraction": subtracting,
    "multiplication": multiplying,
    "division": division,
}

function pickRandomNumber(difficultyLevel) {
    // var multiplier = difficultyToLength[difficultyLevel] 
    var randomNumber = Math.ceil((Math.random()) * difficultyLevel);
    console.log(randomNumber);
    return randomNumber
}

function pickRandomSign(signArray) {
    // picks a random arithmetic sign from a given array
    var randomIndex = Math.floor(Math.random() * signArray.length);
    return signArray[randomIndex]
}


function updateValues(num1, num2, sign) {
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("arith_sign").innerText = sign;
}


function creatingCalculation(difficultyLevel) {
    var number1 = pickRandomNumber(difficultyDigit1);
    var number2 = pickRandomNumber(difficultyDigit2);
    var arithSign = pickRandomSign(arrOfSigns);
    console.log("THE ARITH SIGN: " + arithSign + " and its type: " + typeof(arithSign));
    var result = wordToSignFunc[arithSign](number1, number2, difficultyNow);
    var arithSignCurrent = wordToSign[arithSign];
    console.log("result: ", result);
    updateValues(number1, number2, arithSignCurrent);
    return result
}

// slightly modify the function above so that exercises are a bit more interesting
// thinking - the difficulty picked would be the upper limit for each number
// if we pick "normal", which is 3 digit numbers, then that means that the exercises can be
// 1-3 digit number <action> 1-3 digit number. This way it's not only 389*298 but also easier ones like
// 4*743 and stuff. Also, could later expand this difficulty thing, so that it's always 1 digit times
// 3 digits, or 2 digits times 3 digits. Add some of that modification.

// Perhaps just buttons that would allow you to pick the 1) amount of digits for each number
// or 2) the upper limit for each number. Instead of the difficulty we'd have full customization







function checkIfCorrectAns(correctAns) {
    var givenAnswer = document.getElementById("answer").value
    if (givenAnswer == correctAns) {
        console.log("Good job, the answer is correct!");
        userPoints += 1;
        document.getElementById("user_points").innerText = "Current points: " + userPoints;
    } else {
        console.log("No quant future for you");
    }
    document.getElementById("answer").value = ""
}



// so we just need to add an event listener.
// when enter is pressed, this listener will:
// 1) Check the current value inputted against the correct answer and register a point
// 2) Change the numbers on the screen

// NO NEED FOR MORE EVEN LISTENERS, THAT'S IT!




function checkingAndChangingNumbers(event) {
    if (event.key === "Enter") {
    // check current answer
    // get answer    
    var currentAnswer = document.getElementById("answer").value;
    // check it
    checkIfCorrectAns(correctCurrentAnswer);


    // change numbers on screen 
    correctCurrentAnswer = creatingCalculation(difficultyNow);
}
}






// Logic for the timer:

// we need a function that is async to not hold up other processes
// find the equivalent of time.wait() to update the timer on screen each second
// 


// function printRandomStuff() {
//     console.log("This is working so far...");
// }




var correctCurrentAnswer = creatingCalculation(difficultyNow)
document.addEventListener("keydown", checkingAndChangingNumbers);


var counter = timeAmount;
var theTimer = setInterval(() => {
    if (counter == 0) {
        document.removeEventListener("keydown", checkingAndChangingNumbers)
        clearInterval(theTimer);
    } else{
        console.log("is this working: " + counter);
        counter -= 1;
        document.getElementById("timer").innerText = "Time left: " + counter + " seconds";
    }

}, 1000)






// the localStorage can only handle strings. Need to use json stringify to handle arrays. Look
// into that 




// at the end of a round, register the result into a json file (later do a graph or smth to show growth over time)
// also register average response time! Will be interesting to see (so just overall time divided by amount answered)
// also, need to decide whether an incorrect answer makes the question go away or the user must answer before moving on (or even penalized?), so the user cant just cheat
// for instance, if the q is 99*44 the user could just enter 1, click enter and move onto an easier q like 10*99, which would make the training pointless

// so we need to define separate difficulty levels. Each additional digit could carry a difficulty point. So 1 digit times 3 digits would be 4 points of difficulty, just like 2 x 2. This way we can slightly 
// standardize the system. Since the max is 4digits each, max difficulty is 8 (oh boy).
// min difficulty is 2, but that's just 1 digit times 1 digit which is child's play, hence should be disregarded.
// 
// most realistic: min difficulty - 3 points, max difficulty 8 points.
// userPoints is the var 




var difficultyLeagePoints = difficultyToLength[difficultyDigit1] + difficultyToLength[difficultyDigit2];
console.log("This is the score of difficulty: " + difficultyLeagePoints);

// now that we have difficulty leagues, each of the 3 durations can have their own difficulties and scores.
// should do something about the signs too!

// also, need to do something about division - for now it's just nonsense, need to either do fractions or division that actually makes sense instead of 20 digits after the comma


