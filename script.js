// let playerScore = 0;
// let computerScore = 0;
// let ties = 0;
// let gameResult;

// // Start the game
// // Play Round
// function playRound() {
//   let playerChoice = getPlayerChoice();
//   let computerChoice = getComputerChoice();
//   let roundWinner = calcRoundWinner(playerChoice, computerChoice);
//   updScore(roundWinner);
// //   console.log("Round Result :-");
//   console.log(`Your Choice : ${playerChoice}`);
//   console.log(`Computer Choice : ${computerChoice}`);
//   console.log(`You [${playerScore}] - [${computerScore}] Computer`);
//   console.log(`Round Winner : ${roundWinner}`);
//   console.log("///////////////////////////////////////////////////")
// }


// for (let i = 1; i <= 5; i++) playRound(i);


// function endGame(){
//     console.log(finalResult(playerScore, computerScore));
//     console.log(`You [${playerScore}] - [${computerScore}] Computer`);
//     console.log("Reload the page to start a new game")

// }

// function getComputerChoice() {
//   let choices = ["rock", "paper", "scissors"];
//   return choices[Math.floor(Math.random() * 3)];
// }

// function getPlayerChoice() {
//   loop: while (true) {
//     let playerChoice = prompt("Rock - Paper - Scissors").toLowerCase();
//     switch (playerChoice) {
//       case "rock":
//         return (playerChoice = "rock");
//       case "paper":
//         return (playerChoice = "paper");
//       case "scissors":
//         return (playerChoice = "scissors");
//       default:
//         alert("Not Valid");
//     }
//   }
// }

// function calcRoundWinner(playerChoice, computerChoice) {
//   if (
//     (computerChoice == "rock" && playerChoice == "scissors") ||
//     (computerChoice == "paper" && playerChoice == "rock") ||
//     (computerChoice == "scissors" && playerChoice == "paper")
//   ) {
//     return "computer";
//   } else if (
//     (playerChoice == "rock" && computerChoice == "scissors") ||
//     (playerChoice == "paper" && computerChoice == "rock") ||
//     (playerChoice == "scissors" && computerChoice == "paper")
//   ) {
//     return "You";
//   } else {
//     return "tie";
//   }
// }

// function updScore(roundWinner) {
//   if (roundWinner == "You") {
//     playerScore++;
//   } else if (roundWinner == "computer") {
//     computerScore++;
//   } else return;
// }

// function finalResult (playerScore, computerScore){
//     if (playerScore > computerScore){
//         return "Congratulations You Are The Winner 🎉"
//     } else if (computerScore > playerScore){
//         return "Computer Wins This Time"
//     } else {
//         return "Tie Wins"
//     }
// }

// endGame()