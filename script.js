let userChoice;

function getComputerChoice () {
    let choice = Math.round(Math.random() * 2 + 1);
    if (choice == 1) {
        return "rock"
    }
    else if (choice == 2) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

function getResultMatch (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose Paper beats Rock!";
        }
        else {
            return "You win! Rock beats Scissors!"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissor") {
            return "You lose Scissors beats Paper!"
        }
        else {
            return "You win! Paper beats Rock!"
        }
    }
    else {
        if (computerSelection === "rock") {
            return "You lose Rock beats Scissors!"
        }
        else {
            return "You win! Scissors beats Paper!"
        }
    }
}

const resultsDiv = document.getElementById("results");

function updateResult(results) {
    resultsDiv.innerHTML = results;
}

const btnRock = document.getElementById("btnRock");
btnRock.addEventListener('click', () => {
    userChoice = "rock";
    const results = getResultMatch(userChoice, getComputerChoice());
    updateResult(results);
});

const btnPaper = document.getElementById("btnPaper");
btnPaper.addEventListener('click', () => {
    userChoice = "paper";
    const results = getResultMatch(userChoice, getComputerChoice());
    updateResult(results);
});

const btnScx = document.getElementById("btnScx");
btnScx.addEventListener('click', () => {
    userChoice = "scissors";
    const results = getResultMatch(userChoice, getComputerChoice());
    updateResult(results);
});

