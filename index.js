var button60s = document.getElementById("60s");
var button120s = document.getElementById("120s");
var button180s = document.getElementById("180s");
var buttonAdd = document.getElementById("add");
var buttonSubtract = document.getElementById("subtract");
var buttonMultiply = document.getElementById("multiply");
var buttonDivide = document.getElementById("divide");
var buttonStart = document.getElementById("start");
var buttonDigit1Len1 = document.getElementById("digit1len1");
var buttonDigit1Len2 = document.getElementById("digit1len2");
var buttonDigit1Len3 = document.getElementById("digit1len3");
var buttonDigit1Len4 = document.getElementById("digit1len4");
var buttonDigit2Len1 = document.getElementById("digit2len1");
var buttonDigit2Len2 = document.getElementById("digit2len2");
var buttonDigit2Len3 = document.getElementById("digit2len3");
var buttonDigit2Len4 = document.getElementById("digit2len4");


var listOfSigns = []



function updateCurrentPickedSignsList(listOfSigns) {
    document.getElementById("signs").innerText = listOfSigns;
}


function startButtonActions() {
    // run checks to see if everything has been picked
    // so the array has to be non-empty
    // with the others we can just check if localStorage has them
    if ((listOfSigns.length !== 0) && (localStorage.getItem("duration")) && (localStorage.getItem("digit1")) && (localStorage.getItem("digit2"))) {
        // if successful, move to the other page and start   
        moveToNextHTML();
    } else {
        document.getElementById("errorArea").innerText = "Make sure to specify all the required parameters!";
        console.log("Make sure to specify all the required parameters!");
    }



}

function moveToNextHTML() {
    console.log("GOT TO THE HTML FUNCTION");
    localStorage.setItem("actions", JSON.stringify(listOfSigns));
    window.location.href = "./exercises.html";
}

buttonStart.addEventListener("click", startButtonActions);


function addToListOfSigns(listOfSigns, item) {
    listOfSigns.push(item);
    console.log(listOfSigns);
}


function removeItemFromArray(itemName, listOfSigns) {
    var indexOfItem = listOfSigns.indexOf(itemName);
    listOfSigns.splice(indexOfItem, 1);
    console.log("removed the item: " + itemName);
}

buttonAdd.addEventListener("click", () => {
    if (listOfSigns.includes("addition")) {
        removeItemFromArray("addition", listOfSigns);
    } else {
        addToListOfSigns(listOfSigns, "addition");
    }
    updateCurrentPickedSignsList(listOfSigns)
})

buttonSubtract.addEventListener("click", () => {
    if (listOfSigns.includes("subtraction")) {
        removeItemFromArray("subtraction", listOfSigns);
        console.log(listOfSigns);
    } else {
        addToListOfSigns(listOfSigns, "subtraction");
    }
    updateCurrentPickedSignsList(listOfSigns)
})

buttonMultiply.addEventListener("click", () => {
    if (listOfSigns.includes("multiplication")) {
        removeItemFromArray("multiplication", listOfSigns);
    } else {
        addToListOfSigns(listOfSigns, "multiplication");
    }
    updateCurrentPickedSignsList(listOfSigns)
})

buttonDivide.addEventListener("click", () => {
    if (listOfSigns.includes("division")) {
        removeItemFromArray("division", listOfSigns);
    } else {
        addToListOfSigns(listOfSigns, "division");
    }
    updateCurrentPickedSignsList(listOfSigns)
})

// need to modularize this badly, my code is way too repetitive!

function addToStorage(item) {
    localStorage.setItem("duration", item);
    document.getElementById("duration").innerText = localStorage.getItem("duration") + " seconds";
}


button60s.addEventListener("click", () => {
    addToStorage(60);
})

button120s.addEventListener("click", () => {
    addToStorage(120);
})

button180s.addEventListener("click", () => {
    addToStorage(180);
})




var testArray = ["apple", "banana", "orange"];

localStorage.setItem("test", JSON.stringify(testArray));


function addDigitLenToLocalStorage(digitNo, lenOfDigit) {
    localStorage.setItem("digit" + digitNo, lenOfDigit);
    console.log("digit" + digitNo + " has been added with len of " + lenOfDigit);
}


buttonDigit1Len1.addEventListener("click", () => {
    addDigitLenToLocalStorage("1", 1);
})

buttonDigit1Len2.addEventListener("click", () => {
    addDigitLenToLocalStorage("1", 2);
})

buttonDigit1Len3.addEventListener("click", () => {
    addDigitLenToLocalStorage("1", 3);
})

buttonDigit1Len4.addEventListener("click", () => {
    addDigitLenToLocalStorage("1", 4);
})

buttonDigit2Len1.addEventListener("click", () => {
    addDigitLenToLocalStorage("2", 1);
})

buttonDigit2Len2.addEventListener("click", () => {
    addDigitLenToLocalStorage("2", 2);
})

buttonDigit2Len3.addEventListener("click", () => {
    addDigitLenToLocalStorage("2", 3);
})

buttonDigit2Len4.addEventListener("click", () => {
    addDigitLenToLocalStorage("2", 4);
})