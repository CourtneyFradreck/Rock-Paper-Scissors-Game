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
document.write("You chose " + player + "<br>");
document.write("Computer chose " + randomItem + "<br>");

if (player === randomItem) {
  document.write(
    "It's a Draw! Both You and The Computer Chose The Same Item<br>"
  );
} else if (player === "Rock" && randomItem === "Paper") {
  document.write("Computer Won!<br>");
} else if (player === "Rock" && randomItem === "Scissors") {
  document.write("You Won!<br>");
} else if (player === "Paper" && randomItem === "Rock") {
  document.write("You Won!<br>");
} else if (player === "Paper" && randomItem === "Scissors") {
  document.write("Computer Won!<br>");
} else if (player === "Scissors" && randomItem === "Rock") {
  document.write("Computer Won!<br>");
} else if (player === "Scissors" && randomItem === "Paper") {
  document.write("You Won!<br>");
}
