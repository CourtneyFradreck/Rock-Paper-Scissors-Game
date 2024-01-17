alert("Hey there!! Let's Play a Game");
let game = ["Rock", "Paper", "Scissors"];
let player = prompt("Choose between Rock, Paper or Scissors");
alert("You chose " + player);

let computer = Math.floor(Math.random() * game.length); // a number from 0 to 2
let randomItem = game[computer]; // rock, paper or scissors
alert("Computer chose " + randomItem); // prints the random item

if (player === computer) {
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
} else {
  alert("You chose an invalid Property");
}
