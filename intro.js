var button60s = document.getElementById("60s")
var button120s = document.getElementById("120s")
var button180s = document.getElementById("180s")
var buttonAdd = document.getElementById("add")
var buttonSubtract = document.getElementById("subtract")
var buttonMultiply = document.getElementById("multiply")
var buttonDivide = document.getElementById("divide")
var buttonStart = document.getElementById("start")


var listOfSigns = []






function moveToNextHTML() {
    localStorage.setItem("actions", listOfSigns);
    window.location.href = "./index.html";
}

buttonStart.addEventListener("click", moveToNextHTML);


function addToListOfSigns(listOfSigns, item) {
    listOfSigns.push(item);
    console.log(listOfSigns);
}


buttonAdd.addEventListener("click", () => {
    if (listOfSigns.includes("addition")) {
        return
    } else {
        addToListOfSigns(listOfSigns, "addition");
    }
})

buttonSubtract.addEventListener("click", () => {
    if (listOfSigns.includes("subtraction")) {
        return
    } else {
        addToListOfSigns(listOfSigns, "subtraction");
    }
})

buttonMultiply.addEventListener("click", () => {
    if (listOfSigns.includes("multiplication")) {
        return
    } else {
        addToListOfSigns(listOfSigns, "multiplication");
    }
})

buttonDivide.addEventListener("click", () => {
    if (listOfSigns.includes("division")) {
        return
    } else {
        addToListOfSigns(listOfSigns, "division");
    }
})