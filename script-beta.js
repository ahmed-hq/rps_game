const choices = ["rock","paper","scissors"]

function game() {
    //play the game
    //play the five round
    //console based
}

function playerChoice () {
    //get input from player
}

function computerChoice (){
    //  get random choice from computer 
    return choices[Math.floor(Math.random()*choices.length)]
}






























//--------------------------------------------------------------------------
// let playerName = prompt('Your Name')
// let playerScore = 0
// let computerScore = 0
// let roundWinner = '';

// console.log(`Computer Choice (${getComputerChoice()})`)
// console.log(`${playerName}'s Score (${playerScore})`);
// console.log(`Ai's Score (${computerScore})`);
// console.log(roundWinner);



// // function getComputerChoice() {
// //     const selection = ['ROCK', 'PAPER', 'SCISSORS'];
// //     return selection[Math.floor(Math.random() *3) ];
    
// // }

// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 3)
//     switch (randomNumber) {
//       case 0:
//         return 'ROCK'
//       case 1:
//         return 'PAPER'
//       case 2:
//         return 'SCISSORS'
//     }
// }





// function playRound(playerSelection,computerSelection) {



//     if (computerSelection === playerSelection) {
//         roundWinner = 'Draw'
//     }

//     if (
//         (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ) ||
//         (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
//         (playerSelection =='PAPER' && computerSelection  == 'ROCK')
//     )
//     {
//         playerScore++
//         roundWinner = `${playerName}`
//     }

//     if (
//         (computerSelection == 'ROCK' && playerSelection == 'SCISSORS' ) ||
//         (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
//         (computerSelection == 'PAPER' && playerSelection  == 'ROCK')
//     )
//     {
//         computerScore++
//         roundWinner = 'Ai'
//     }

//     return;
// }

// function game() {

//     return ;
// }

// function isGameOver(){
//     return playerScore === 5 || computerScore === 5;
// }

// alert(playRound(prompt("your game"), getComputerChoice()));
// alert(prompt("your game"))



// function game() {

// return;
// }


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection))