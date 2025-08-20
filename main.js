console.log("connected")

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
    // picks a random arithmetic sign from a given array
    var randomIndex = Math.floor(Math.random() * signArray.length);
    return signArray[randomIndex]
}


function creatingCalculation(difficultyLevel) {
    var number1 = pickRandomNumber(difficultyLevel);
    var number2 = pickRandomNumber(difficultyLevel);
    var arithSign = pickRandomSign(arrOfSigns);
    var result = wordToSignFunc[arithSign](number1, number2);
    var arithSignCurrent = wordToSign[arithSign];
    console.log(result);
    document.getElementById("num1").innerText = number1;
    document.getElementById("num2").innerText = number2;
    document.getElementById("arith_sign").innerText = arithSignCurrent;
    return result
}


function checkIfCorrectAns(correctAns) {
    var givenAnswer = document.getElementById("answer").value
    if (givenAnswer == correctAns) {
        console.log("Good job, the answer is correct!");
    } else {
        console.log("No quant future for you");
    }
    document.getElementById("answer").value = ""
}



function testingThing(event) {
    var currentAnswer = creatingCalculation(difficultyNow);
    if (event.key === "Enter") {
        console.log("Time to check the answer!");
        checkIfCorrectAns(currentAnswer);
        document.removeEventListener("keydown", testingThing);
        deployExerciseAndCheckAns(difficultyNow);
    }
}



function deployExerciseAndCheckAns(difficultyNow) {
    // step 1: create the exercise:

    //  step 2: wait for the user to submit an answer
    document.addEventListener("keydown", testingThing);

}


deployExerciseAndCheckAns(difficultyNow);




//  how about we instead deploy the listening to Enter and only then add the function???
//  I think the problem is that we're stacking too many listeners and they all then individually
//  execute the functions, that's why they're stacking!




// document.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         console.log("Enter has been pressed");
//         var currentAnswer = creatingCalculation(difficultyNow);
//         checkIfCorrectAns(currentAnswer);
//         document.removeEventListener();


//     }
// })
