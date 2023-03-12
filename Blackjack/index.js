let cards = []
let cardsEl= document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let moneyEl = document.getElementById("money-el")
let sum = 0
let player = {
    playerName: "max",
    money: null
}
let hasBlackjack = false
let isAlive = false
let message = ""

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    moneyEl.textContent = "dollars: "
    if (sum <= 20){
        message = "draw new card?"
    } else if (sum === 21){
        message = "you won!"
        hasBlackjack = true
        player.money += 50
        moneyEl.textContent += player.money
    } else {
        message = "you lost."
        isAlive = false
        player.money -=50
        moneyEl.textContent += player.money
    }

    messageEl.textContent = message

    cardsEl.textContent = "cards: "
    for(let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + ",  "
        console.log(cards)
    }

    sumEl.innerText = "sum: " + sum
}

function drawCard() {
    if (isAlive === true && hasBlackjack === false) {
    cards.push(getRandomCard())
    sum += getRandomCard()
    renderGame()
    }
}

if (hasBlackjack === true){
        console.log("Withdraw prize!")
    }
    if (isAlive === false){
        console.log("You are out.")
} 

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1

if (randomNumber > 10) {
    return 10
}
if (Math.floor === 1) {
    return 11
}
else return randomNumber

}