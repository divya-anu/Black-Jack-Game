let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let uname=""
let chips=0
let message = ""
let param=new URLSearchParams(window.location.search)
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
uname=param.get("name") 
chips=param.get("chips")
playerEl.textContent = uname + ": $" + chips

function getRandomNumber() {
    let randomNumber = Math.floor ( Math.random() * 13 ) + 1
    if ( randomNumber === 1 ) {
        return 11
    }
    else if ( randomNumber > 10 ) {
        return 10
    }
    else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(const element of cards) {
        cardsEl.textContent += element + " "
    }
    if ( sum <= 20 ) {
        message = "Would you like to draw a new card?"
    }
    else if ( sum === 21 ) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if ( isAlive === true && hasBlackJack === false ){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}