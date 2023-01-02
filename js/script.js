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

let paper

// let playerSelection = prompt(/Rock, Scissors or Paper?: /i);

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'pierdes'
  } else if (playerSelection == '')
}
