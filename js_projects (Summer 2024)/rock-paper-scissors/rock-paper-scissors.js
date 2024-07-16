/* ROCK PAPER SCISSORS */

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }else{
        switch(playerChoice){
            case("Rock"):
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case("Paper"):
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case("Scissors"):
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case("YOU WIN!"):
            playerScore++;
            resultDisplay.classList.add("greenText")
            break;
        
            case("YOU LOSE!"):
            computerScore++;
            resultDisplay.classList.add("redText")
            break;
    }

    playerScoreDisplay.textContent = `${playerScore}`
    computerScoreDisplay.textContent = `${computerScore}`
    resultDisplay.textContent = result;
}