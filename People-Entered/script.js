let countChange = document.getElementById("countChange")
let welcomeEl = document.getElementById("welcome-el")
let count = 0
let name = "Maximillian"
let greeting = "Welcome back"
let myGreeting = greeting + ", " + name + "! "
let savedBar = count + " -"

welcomeEl.innerText = myGreeting

function increment() {
    countChange.innerText = count + 1
    count += + 1 
    console.log(count)
}

function countSaved () {
    console.log(count)
    savedBar += count + " - " 
    countSavedDisplay.textContent = savedBar
}

function countReset () {
    count = 0
    countChange.innerText = 0
}