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

function getHumanChoice(){
  let HumanChoice = prompt("Chose between rock paper and scissors");
  HumanChoice = HumanChoice.toLowerCase();
  return HumanChoice;
}

let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice){
  if (HumanChoice === ComputerChoice) {
    console.log("Its a tie.");
  }else if(HumanChoice === "rock" && ComputerChoice === "scissors" || HumanChoice === "scissors" && ComputerChoice === "paper" || HumanChoice === "paper" && ComputerChoice === "rock"
  ){
    console.log(`You win ${HumanChoice} beats ${ComputerChoice}`);
    HumanScore++;
  }else{
    console.log(`You lose ${ComputerChoice} beats ${HumanChoice}`);
    ComputerScore++;
  }

}
const HumanSelection = getHumanChoice();
//const ComputerSelection = getComputerChoice();



function playGame(){
  const ComputerSelection = getComputerChoice();
  playRound(HumanSelection, ComputerSelection);

}

playGame();