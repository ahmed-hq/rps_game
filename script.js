let computerEmoji = document.querySelector(".computer-emoji");
let computerSign = document.querySelector(".computer-sign");
let playerChoices = document.querySelectorAll(".player-choice");
let playerRock = document.querySelector("#player-rock");
let playerPaper = document.querySelector("#player-paper");
let playerScissors = document.querySelector("#player-scissor");
let playBtn = document.querySelector("#play-again");
let pS = document.querySelector("#player-score");
let cS = document.querySelector("#computer-score");
let finalResultType = document.querySelector("#final-result");
let gameSection = document.querySelector(".game-section");

let rounds = 0;
let roundWinner = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameResult;

playerRock.addEventListener("click", selectRock);
playerPaper.addEventListener("click", selectPaper);
playerScissors.addEventListener("click", selectScissors);

playBtn.addEventListener("click", () => {
  location.reload();
});

function selectRock() {
  chooseRock();
  playRound();
}
function selectScissors() {
  chooseScissors();
  playRound();
}
function selectPaper() {
  choosePaper();
  playRound();
}

function playerSignRock() {
  if (roundWinner === "You") {
    playerRock.style.backgroundColor = "#329F5B";
    setTimeout(() => {
      playerRock.style.backgroundColor = "#32324b";
    }, 300);
  } else if (roundWinner === "computer") {
    playerRock.style.backgroundColor = "#E94F37";
    setTimeout(() => {
      playerRock.style.backgroundColor = "#32324b";
    }, 300);
  } else if (roundWinner === "tie") {
    playerRock.style.backgroundColor = "#F2DD6E";
    setTimeout(() => {
      playerRock.style.backgroundColor = "#32324b";
    }, 300);
  }
}

function playerSignPaper() {
  if (roundWinner === "You") {
    playerPaper.style.backgroundColor = "#329F5B";
    setTimeout(() => {
      playerPaper.style.backgroundColor = "#32324b";
    }, 300);
  } else if (roundWinner === "computer") {
    playerPaper.style.backgroundColor = "#E94F37";
    setTimeout(() => {
      playerPaper.style.backgroundColor = "#32324b";
    }, 300);
  } else if (roundWinner === "tie") {
    playerPaper.style.backgroundColor = "#F2DD6E";
    setTimeout(() => {
      playerPaper.style.backgroundColor = "#32324b";
    }, 300);
  }
}

function playerSignScissors() {
  if (roundWinner === "You") {
    playerScissors.style.backgroundColor = "#329F5B";
    setTimeout(() => {
      playerScissors.style.backgroundColor = "#32324b";
    }, 300);
  } else if (roundWinner === "computer") {
    playerScissors.style.backgroundColor = "#E94F37";
    setTimeout(() => {
      playerScissors.style.backgroundColor = "#32324b";
    }, 300);
  } else if (roundWinner === "tie") {
    playerScissors.style.backgroundColor = "#F2DD6E";
    setTimeout(() => {
      playerScissors.style.backgroundColor = "#32324b";
    }, 300);
  }
}

function findSign() {
  if (playerChoice == "rock") {
    playerSignRock();
  } else if (playerChoice == "paper") {
    playerSignPaper();
  } else if (playerChoice == "scissors") {
    playerSignScissors();
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  roundWinner = calcRoundWinner(playerChoice, computerChoice);
  findSign();
  updScore(roundWinner);
  rounds++;

  finalResultMessage();
  getComputerEmoji(computerChoice);
  roundResult(roundWinner);
  pS.innerText = `${playerScore}`;
  cS.innerText = `${computerScore}`;
  if (rounds === 5) {
    removeEnlarge();
    displayBtn();
    removeEvent();
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getComputerEmoji(computerChoice) {
  if (rounds === 5 && computerScore > playerScore) {
    computerEmoji.src = "images/laughing.svg";
    computerSign.style.opacity = "0%";
  } else if (rounds === 5 && computerScore === playerScore) {
    computerEmoji.src = "images/happy.svg";
    computerSign.style.opacity = "0%";
  } else if (rounds === 5 && computerScore < playerScore) {
    computerEmoji.src = "images/angry.svg";
    computerSign.style.opacity = "0%";
  } else if (computerChoice == "rock") {
    return (computerEmoji.src = "images/rock.svg");
  } else if (computerChoice == "paper") {
    return (computerEmoji.src = "images/paper.svg");
  } else if (computerChoice == "scissors") {
    return (computerEmoji.src = "images/scissor.svg");
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
    return "You";
  } else {
    return "tie";
  }
}

function roundResult(roundWinner) {
  if (roundWinner === "computer") {
    computerSign.style.backgroundColor = "#329F5B";
  } else if (roundWinner === "You") {
    computerSign.style.backgroundColor = "#E94F37";
  } else if (roundWinner === "tie") {
    computerSign.style.backgroundColor = "#F2DD6E";
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

function removeEnlarge() {
  pS.style.fontSize = "62px";
  cS.style.fontSize = "62px";
}

function finalResultMessage() {
  if (rounds === 5 && computerScore > playerScore) {
    gameSection.style.borderColor = "#E94F37";
    finalResultType.innerText = "You Lost";
    finalResultType.style.display = "block";
    finalResultType.style.color = "#E94F37";
  } else if (rounds === 5 && computerScore === playerScore) {
    gameSection.style.borderColor = "#F2DD6E";
    finalResultType.innerText = "Tie";
    finalResultType.style.display = "block";
    finalResultType.style.color = "#F2DD6E";
  } else if (rounds === 5 && computerScore < playerScore) {
    gameSection.style.borderColor = "#329F5B";
    finalResultType.innerText = "You Won";
    finalResultType.style.display = "block";
    finalResultType.style.color = "#329F5B";
  }
}

function removeEvent() {
  playerRock.removeEventListener("click", selectRock);

  playerPaper.removeEventListener("click", selectPaper);

  playerScissors.removeEventListener("click", selectScissors);
}

function chooseRock() {
  playerChoice = "rock";
  return playerChoice;
}

function choosePaper() {
  playerChoice = "paper";
  return playerChoice;
}

function chooseScissors() {
  playerChoice = "scissors";
  return playerChoice;
}

function displayBtn() {
  playBtn.style.display = "block";
}
