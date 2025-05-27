
//function to get computer's choice
function getComputerChoice(){
  switch ( Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//function to get human choice
function getHumanChoice(){
  let HumanChoice = prompt("Chose between rock paper and scissors");
  HumanChoice = HumanChoice.toLowerCase();
  return HumanChoice;
}


//initialize score variables
let HumanScore = 0;
let ComputerScore = 0;


//function to play a round
function playRound(HumanChoice, ComputerChoice){

  //conditional statements to determine the winner
  if (HumanChoice === ComputerChoice) {
    console.log("Its a tie!");
  }else if(HumanChoice === "rock" && ComputerChoice === "scissors" || HumanChoice === "scissors" && ComputerChoice === "paper" || HumanChoice === "paper" && ComputerChoice === "rock"
  ){
    console.log(`You win! ${HumanChoice} beats ${ComputerChoice}`);
    HumanScore++;
  }else{
    console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}`);
    ComputerScore++;
  }

}
const HumanSelection = getHumanChoice();
//const ComputerSelection = getComputerChoice();


//function to play the game
function playGame(){
  const ComputerSelection = getComputerChoice();
  playRound(HumanSelection, ComputerSelection);

}

playGame();