let firstCard = getRandomValue();
let secondCard = getRandomValue();
let crds = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



function getRandomValue()
{
	return (5);
}

function startGame()
{
	renderGame();
}

function renderGame()
{
	//let contentSum = sumEl.textContent;
	//sumEl.textContent = contentSum + sum;
	sumEl.textContent = "Sum: " + sum;
	///let contentCards = cardsEl.textContent;
	cardsEl.textContent = "Cards: ";
	for (let i = 0; i < crds.length; i++)
	{
		cardsEl.textContent += crds[i] + "  ";
	}
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
	let card = getRandomValue();
	sum+=card;
	crds.push(card);
	renderGame();
}

//==> I reache the 18 vedio

//push items into arrays :
let car = [7, 4];
console.log(car);
car.push(6);
console.log(car);
car.pop();
console.log(car);
//render an array into a paragraph :
let data = ["my", "Name", "is", "Reshe", "From", "1337"];
let pEl = document.getElementById("myp");
for (let i = 0; i < data.length; i++)
{
	pEl.textContent += data[i] + "  ";
}