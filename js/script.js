function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let retorno = "Its a tie!";
    if (playerSelection == "paper" && computerSelection == "rock") {
        retorno = "Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        retorno = "Paper cant win against scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        retorno = "Rock cant beat paper";
    } else if ((playerSelection = "rock" && computerSelection == "scissors")) {
        retorno = "Rock beats scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        retorno = "Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        retorno = "Scissors are too weak to win a fight with rock";
    } else if (
        (playerSelection && computerSelection != "paper") ||
        "rock" ||
        "scissos"
    ) {
        retorno = "What the fuck is that?";
    }

    return retorno;
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Whats your choice?: ").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
