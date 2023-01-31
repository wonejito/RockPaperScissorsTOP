function getComputerChoice() {
  let choice;
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 1) {
    choice = "rock";
  } else if (randomChoice == 2) {
    choice = "scissors";
  } else {
    choice = "paper";
  }
  return choice;
}

let playerPoints = 0;
let computerPoints = 0;
function playRound(playerSelection, computerSelection) {
  let paper = "paper";
  let rock = "rock";
  let scissors = "scissors";
  let result;
  if (playerSelection == paper && computerSelection == rock) {
    result = `${playerSelection} beats ${computerSelection}`;
    playerPoints++;
  } else if (playerSelection == paper && computerSelection == scissors) {
    result = `${computerSelection} beats ${playerSelection}`;
    computerPoints++;
  } else if (playerSelection == rock && computerSelection == paper) {
    result = `${computerPoints} beats ${playerSelection}`;
    computerPoints++;
  } else if (playerSelection == rock && computerSelection == scissors) {
    result = `${playerSelection} beats ${computerSelection}`;
    playerPoints++;
  } else if (playerSelection == scissors && computerSelection == rock) {
    result = `${computerSelection} beats ${playerSelection}`;
    computerPoints++;
  } else if (playerSelection == scissors && computerSelection == paper) {
    result = `${playerSelection} beats ${computerSelection}`;
    playerPoints++;
  }
}
