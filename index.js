let player = {
    name: "Credit",
    chips: 145
}

let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let startButton = document.getElementById("startgame-btn");
let newCardButton = document.getElementById("newcard-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let random = Math.floor(Math.random() * 13) + 1;
    if(random === 1){
        return 11;
    }
    else if(random > 10){
        return 10;
    }
    else{
        return random;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame()
{
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum < 21){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "You've got BlackJack!";
        hasBlackJack = true;
    }
    else{
        message = "You are out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard()
{
    if (isAlive && hasBlackJack === false)
    {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

startButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);
