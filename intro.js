var button60s = document.getElementById("60s")
var button120s = document.getElementById("120s")
var button180s = document.getElementById("180s")
var buttonAdd = document.getElementById("add")
var buttonSubtract = document.getElementById("subtract")
var buttonMultiply = document.getElementById("multiply")
var buttonDivide = document.getElementById("divide")
var buttonStart = document.getElementById("start")









function moveToNextHTML() {
    window.location.href = "./index.html";
}

buttonStart.addEventListener("click", moveToNextHTML);