var button60s = document.getElementById("60s")
var button120s = document.getElementById("120s")
var button180s = document.getElementById("180s")
var buttonAdd = document.getElementById("add")
var buttonSubtract = document.getElementById("subtract")
var buttonMultiply = document.getElementById("multiply")
var buttonDivide = document.getElementById("divide")
var buttonStart = document.getElementById("start")


var listOfSigns = []



function updateCurrentPickedSignsList(listOfSigns) {
    document.getElementById("signs").innerText = listOfSigns;
}


function moveToNextHTML() {
    localStorage.setItem("actions", JSON.stringify(listOfSigns));
    window.location.href = "./exercises.html";
}

buttonStart.addEventListener("click", moveToNextHTML);


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
