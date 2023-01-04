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
    let result = "Pierdes";
  } else if (playerSelection == "piedra" && computerSelection == "tijeras") {
    let result = "Ganas";
  } else if (playerSelection == "papel" && computerSelection == "tijeras") {
    let result = "Pierdes";
  } else if (playerSelection == "papel" && computerSelection == "piedra") {
    let result = "Pierdes";
  } else if (playerSelection == "tijeras" && computerSelection == "piedra") {
    let result = "Pierdes";
  } else if (playerSelection == "tijeras" && computerSelection == "papel") {
    let result = "Ganas";
  }
}
