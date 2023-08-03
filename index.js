let firstCard = 11;
let secondCard = 10;


let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame()
{
	let contentSum = sumEl.textContent;
	sumEl.textContent = contentSum + sum;

	let contentCards = cardsEl.textContent;
	cardsEl.textContent = contentCards + firstCard + "  " + secondCard;
	if (sum < 21) {
		message = "Do you want to draw a new card? 🙂";
		isAlive = true;
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack! 🥳";
		hasBlackJack = true;
		isAlive = true;
	} else if (sum > 21) {
		message = "You're out of the game! 😭";
	}
	console.log(message);
	messageEl.textContent = message;
}

function newCard()
{
	console.log("Drawing a new card from the deck!");
}