//function to get computer's choice
function getComputerChoice(){
  switch (Math.floor(Math.random() *3)){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "something went wrong";
  }
}

// console.log(getComputerChoice());

//function to get user's choice
function getHumanChoice(){
  let humanChoice =  prompt("Choose between Rock, Paper or Scissors");
  return humanChoice;
}

// console.log(getHumanChoice())

//player score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice){
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ){
    console.log("You won! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else{
    console.log("Computer won! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  // Final winner announcement
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();