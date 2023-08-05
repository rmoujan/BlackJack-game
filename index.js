
let crds = [];

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//creating an object :
let player = {
	name : "Reshe",
	chips : 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomValue()
{
	let random = Math.floor(Math.random() * 13) + 1;
	if (random  == 1)
		return (11);
	else if (random >= 11 && random <= 13)
		return (10);
	return random;
}

function startGame()
{
	if (sum == 0)
	{
		let firstCard = getRandomValue();
		let secondCard = getRandomValue();
		sum = firstCard + secondCard;
		crds.push(firstCard);
		crds.push(secondCard);

	}
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
		isAlive = false;
	}
	console.log(message);
	messageEl.textContent = message;
}

function newCard()
{
	if (isAlive === true && hasBlackJack === false)
	{
		console.log("Drawing a new card from the deck!");
		let card = getRandomValue();
		sum+=card;
		crds.push(card);
		renderGame();
	}
}


//push items into arrays :
let car = [7, 4];
console.log(car);
car.push(6);
console.log(car);
car.pop();
console.log(car);
//render an array into a paragraph :
// let data = ["my", "Name", "is", "Reshe", "From", "1337"];
// let pEl = document.getElementById("myp");
// for (let i = 0; i < data.length; i++)
// {
// 	pEl.textContent += data[i] + "  ";
// }
//==> I reache the 36 vedio
function rollDice()
{
	let random = Math.floor(Math.random() * 13) + 1;

	return random;
}
console.log(rollDice());


//creating objects:
let course = {
	title: "learn CSS Grid for free",
	lessons: 16,
	creator:"Reshe",
	length:63,
	level:2,
	isFree: true,
	tags:["html", "css"]
}
//accessing elemnts inside objects.
console.log(course["tags"]); 
//testing objects:
 let airbnb = {
	state:true,
	name:"ireland",
	count:12,
	values:[1, 6, 7]
 }

 console.log(airbnb.state);
 console.log(airbnb["values"]);