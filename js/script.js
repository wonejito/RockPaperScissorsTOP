function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "piedra";
  } else if (randomNumber == 1) {
    return "papel";
  } else {
    return "tijeras";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "piedra" && computerSelection == "papel") {
    let result = "Perdiste";
  } else if (playerSelection == "piedra" && computerSelection == "tijeras") {
    let result = "Ganaste";
  } else if (playerSelection == "papel" && computerSelection == "tijeras") {
    let result = "Perdiste";
  } else if (playerSelection == "papel" && computerSelection == "piedra") {
    let result = "Ganaste";
  } else if (playerSelection == "tijeras" && computerSelection == "papel") {
    let result = "Ganaste";
  } else if (playerSelection == "tijeras" && computerSelection == "piedra") {
    let result = "Perdiste";
  } else {
    let result = "EMPATE";
  }
  return result;
}

const playerSelection = "piedra";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// let playerSelection = prompt(/Rock, Scissors or Paper?: /i);

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == "paper" && computerSelection == "scissors") {
//     return "pierdes";
//   } else if (playerSelection == "paper" && computerSelection == "rock") {
//     return "ganas";
//   } else if (playerSelection == "rock" && computerSelection == "paper") {
//     return "ganas";
//   } else if (playerSelection == "rock" && computerSelection == "scissors") {
//     return "ganas";
//   } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     return "pierdes";
//   } else if (playerSelection == "scissors" && computerSelection == "paper") {
//     return "ganas";
//   }
// }
