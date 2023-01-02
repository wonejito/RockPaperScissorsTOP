function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  } else if (randomNumber == 1) {
    return "scissors";
  } else {
    return "paper";
  }
}
// let playerSelection = prompt(/Rock, Scissors or Paper?: /i);

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "pierdes";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "ganas";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "ganas";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "ganas";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "pierdes";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "ganas";
  }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
let roto = playRound(playerSelection, computerSelection);
