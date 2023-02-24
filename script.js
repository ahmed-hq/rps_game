let playerChoices = document.querySelectorAll(".player-choice")
let playerRock = document.querySelector("#player-rock");
let playerPaper = document.querySelector("#player-paper");
let playerScissors = document.querySelector("#player-scissor");
let playBtn = document.querySelector("#play-again");

let rounds = 0
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameResult;


// Start the game
// Play Round

playerRock.addEventListener("click", selectRock);

playerPaper.addEventListener("click", selectPaper);

playerScissors.addEventListener("click", selectScissors);

playBtn.addEventListener("click", () => {
  location.reload()
})


function selectRock(){
  chooseRock();
  playRound();
}
function selectScissors(){
  chooseScissors();
  playRound();
}
function selectPaper(){
  choosePaper();
  playRound();
}


  function playRound(){
      let computerChoice = getComputerChoice();
      let roundWinner = calcRoundWinner(playerChoice, computerChoice);
      updScore(roundWinner);
      rounds++

      //   console.log("Round Result :-");
      console.log(`Your Choice : ${playerChoice}`);
      console.log(`Computer Choice : ${computerChoice}`);
      console.log(`You [${playerScore}] - [${computerScore}] Computer`);
      console.log(`Round Winner : ${roundWinner}`);
      console.log(`Round ${rounds}`)
      console.log("///////////////////////////////////////////////////");
      if (rounds === 5){
        console.log("-----------");
        endGame()
        displayBtn()
        removeEvent()
        console.log("-----------");
      }




    };

  // for (let i = 1; i <= 5; i++) playGame(i);

function endGame() {
  console.log(finalResult(playerScore, computerScore));
  console.log(`You [${playerScore}] - [${computerScore}] Computer`);
  console.log("Reload the page to start a new game");
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
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
    return "You";
  } else {
    return "tie";
  }
}

function updScore(roundWinner) {
  if (roundWinner == "You") {
    playerScore++;
  } else if (roundWinner == "computer") {
    computerScore++;
  } else return;
}

function finalResult(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Congratulations You Are The Winner 🎉";
  } else if (computerScore > playerScore) {
    return "Computer Wins This Time";
  } else {
    return "Tie Wins";
  }
}

function removeEvent(){
  playerRock.removeEventListener("click", selectRock);
  
  playerPaper.removeEventListener("click", selectPaper);
  
  playerScissors.removeEventListener("click", selectScissors);
}

function chooseRock(){
  playerChoice = "rock";
  return playerChoice;
}

function choosePaper(){
  playerChoice = "paper";
  return playerChoice;
}

function chooseScissors(){
  playerChoice = "scissors";
  return playerChoice;
}

function displayBtn(){
  playBtn.style.display= "block";
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
