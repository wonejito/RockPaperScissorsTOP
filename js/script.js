function getComputerChoice() {
  let numeroRandom = Math.floor(Math.random() * 3);
  if (numeroRandom == 0) {
    return "Rock";
  } else if (numeroRandom == 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}
