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
  if (playerSelection == computerSelection) {
    let result = "Creo que es un empate";
  } else {
    if (playerSelection == "piedra" && computerSelection == "papel") {
      let result = "Pierdes";
    } else if (playerSelection == "piedra" && computerSelection == "tijeras") {
      let result = "Ganas";
    } else if (playerSelection == "papel" && computerSelection == "tijeras") {
      let result = "Pierdes";
    } else if (playerSelection == "papel" && computerSelection == "piedra") {
      let result = "Ganas";
    } else if (playerSelection == "tijeras" && computerSelection == "papel") {
      let result = "Ganas";
    } else {
      let result = "Piedes";
      return result;
    }
  }
}

let ramiro = "ramiron";
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
