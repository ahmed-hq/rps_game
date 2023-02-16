let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameResult;

// Start the game
// Play Round
function getPlayerChoice() {
  loop: while (true) {
    let playerChoice = prompt("Rock - Paper - Scissors").toLowerCase();
    switch (playerChoice) {
      case "rock":
        return (playerChoice = "rock");
      case "paper":
        return (playerChoice = "paper");
      case "scissors":
        return (playerChoice = "scissors");
      default:
        alert("Not Valid");
    }
  }
}

function getComputerChoice() {
  let choices = ["rock", " paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
  let roundWinner;
}

// Repeat 5 times
for (let i = 1; i <= 5; i++) playRound(i);

console.log(getPlayerChoice());
