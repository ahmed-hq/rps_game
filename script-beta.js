const choices = ["rock","paper","scissors"]
let playerScore = 0
let computerScore = 0
let winners = [];

function game() {
    //play the game
    //play the five round
    for (let i=1; i<=5; i++){
        playRound(i);
    }
    logWins()
    //console based
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    
    // console.log(winner)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");

    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }

    input = input.toLowerCase();

    let check = inputValidation(input)
    while (check == false) {
        input = prompt("Spelling needs to be exact, capitilization doesn't matter");
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
    
        input = input.toLowerCase();
    
        check = inputValidation(input)
    }

    return input;
}


function computerChoice (){
    //  get random choice from computer 
    return choices[Math.floor(Math.random()*choices.length)]
}

function inputValidation(choice){
    return choices.includes(choice); 
}

function checkWinner(choiceP,choiceC) {
    // console.log(choiceP,choiceC);

    if (choiceC === choiceP) {
        
        return "Draw";

    }   else if (
        (choiceP == "rock" && choiceC == "scissors" ) ||
        (choiceP == "scissors" && choiceC == "paper") ||
        (choiceP =="paper" && choiceC  == "rock")
    ){
        return "Player";

    }   else {
        return "Computer";
    }
}

function logRound(playerChoice,computerChoice,winner,round) {

    console.log('Round:', round );
    console.log('Player Chose:', playerChoice );
    console.log('Computer Chose:',computerChoice);
    console.log(winner,'Won the Round')
    console.log('---------------------------------');
}

function logWins () {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let draws = winners.filter((item) => item == "Draw").length;

    console.log("Results :");
    console.log(`Player : ${playerWins}`);
    console.log(`Computer : ${computerWins}`);
    console.log(`Draws : ${draws}`);
}



game();





























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