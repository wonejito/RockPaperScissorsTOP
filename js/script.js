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
    //playerPoints = playerPoints + 1;
  } else if (playerSelection == computerSelection) {
    result = `${playerSelection} es lo mismo que ${computerSelection}`;
  } else {
    result = `${computerSelection} beats ${playerSelection}`;
    //computerPoints = computerPoints + 1;

    // result = `${playerSelection} & ${computerSelection} son lo mismo`;
  }
  //let puntos = `Player: ${playerPoints} | Computer: ${computerPoints}`;
  return result;
}
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
let board = document.querySelector("#board");
let playerpoints = document.querySelector("#playerpoints");
let computerpoints = document.querySelector("#computerpoints");

let computerPoints = 0;
let playerPoints = 0;

paper.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  board.textContent = playRound("paper", computerSelection);
  if (board.textContent == "paper beats rock") {
    playerPoints = playerPoints + 1;
    playerpoints.textContent = playerPoints;
  } else if (computerSelection == "paper") {
    playerpoints.textContent;
    computerpoints.textContent;
  } else {
    computerPoints = computerPoints + 1;
    computerpoints.textContent = computerPoints;
  }
});

rock.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  board.textContent = playRound("rock", computerSelection);
  if (board.textContent == "rock beats scissors") {
    playerPoints = playerPoints + 1;
    playerpoints.textContent = playerPoints;
  } else if (computerSelection == "rock") {
    playerpoints.textContent;
    computerpoints.textContent;
  } else {
    computerPoints = computerPoints + 1;
    computerpoints.textContent = computerPoints;
  }
});

scissors.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  board.textContent = playRound("scissors", computerSelection);
  if (board.textContent == "scissors beats paper") {
    playerPoints = playerPoints + 1;
    playerpoints.textContent = playerPoints;
  } else if (computerSelection == "scissors") {
    playerpoints.textContent;
    computerpoints.textContent;
  } else {
    computerPoints = computerPoints + 1;
    computerpoints.textContent = computerPoints;
  }
});
