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
let paper = "paper";
let rock = "rock";
let scissors = "scissors";
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == scissors && computerSelection == paper)
  ) {
    result = `${playerSelection} beats ${computerSelection}`;
    playerPoints++;
  } else if (playerSelection == computerSelection) {
    result = `${playerSelection} es lo mismo que ${computerSelection}`;
  } else {
    result = `${computerSelection} beats ${playerSelection}`;
    computerPoints++;

    // result = `${playerSelection} & ${computerSelection} son lo mismo`;
  }
  // let puntos = `Player: ${playerPoints} | Computer: ${computerPoints}`;
  return result;
}
computerSelection = getComputerChoice();
playerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// let puntos = `Player: ${playerPoints} | Computer: ${computerPoints}`;
// console.log(puntos);
