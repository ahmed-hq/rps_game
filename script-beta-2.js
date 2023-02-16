let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameResult;

// Start the game
// Play Round
function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let roundWinner = calcRoundWinner(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice);
  console.log(roundWinner);
}
for (let i = 1; i <= 5; i++) playRound(i);

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

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

function calcRoundWinner(playerChoice, computerChoice) {
  if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")
  ) {
    return "computer";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return "player";
  } else {
    return "tie";
  }
}

console.log();
