alert("Hey there!! Let's Play a Game");
let game = ["Rock", "Paper", "Scissors"];
let player = prompt("Choose between Rock, Paper or Scissors");
while (player !== "Rock" && player !== "Paper" && player !== "Scissors") {
  alert("Invalid choice. Please choose between Rock, Paper or Scissors");
  player = prompt("Choose between Rock, Paper or Scissors");
}
alert("You chose " + player);

let computer = Math.floor(Math.random() * game.length); // computer's index..e.g number 0, 1, 2
let randomItem = game[computer]; // rock, paper or scissors....computer's random choice
alert("Computer chose " + randomItem); // prints the random item

if (player === randomItem) {
  alert("It's a Draw! Both You and The Computer Chose The Same Item");
} else if (player === "Rock" && randomItem === "Paper") {
  alert("Computer Won!");
} else if (player === "Rock" && randomItem === "Scissors") {
  alert("You Won!");
} else if (player === "Paper" && randomItem === "Rock") {
  alert("You Won!");
} else if (player === "Paper" && randomItem === "Scissors") {
  alert("Computer Won!");
} else if (player === "Scissors" && randomItem === "Rock") {
  alert("Computer Won!");
} else if (player === "Scissors" && randomItem === "Paper") {
  alert("You Won!");
}
