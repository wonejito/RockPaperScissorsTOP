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
function score() {
  return score++;
}

// let paper = "paper";
// let rock = "rock";
// let scissors = "scissors";
let computerPoints = 0;
let playerPoints = 0;
function playRound(playerSelection, computerSelection) {
  let paper = "paper";
  let rock = "rock";
  let scissors = "scissors";
  if (
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == scissors && computerSelection == paper)
  ) {
    result = `${playerSelection} beats ${computerSelection}`;
    playerPoints = playerPoints + 1;
  } else if (playerSelection == computerSelection) {
    result = `${playerSelection} es lo mismo que ${computerSelection}`;
  } else {
    result = `${computerSelection} beats ${playerSelection}`;
    computerPoints = computerPoints + 1;

    // result = `${playerSelection} & ${computerSelection} son lo mismo`;
  }
  //let puntos = `Player: ${playerPoints} | Computer: ${computerPoints}`;
  return result;
}
