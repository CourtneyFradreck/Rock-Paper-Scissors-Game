alert("Hey there!! Let's Play a Game");
let game = ["Rock", "Paper", "Scissors"];
let player = prompt("Choose between Rock, Paper or Scissors");
alert("You chose " + player);

let computer = Math.floor(Math.random() * game.length); // a number from 0 to 2
let randomItem = game[computer]; // rock, paper or scissors
alert("Computer chose " + randomItem); // prints the random item
