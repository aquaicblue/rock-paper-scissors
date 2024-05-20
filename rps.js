// /* Java Script for RPS*/

 //Computer's Choice

 function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)           
   if (choice == 3) {
       return 'rock';
   } else if (choice == 2) {
       return 'scissors';
   } else return 'paper';
}

// Human Choice

const rock = document.querySelector(".rock").addEventListener("click",getHumanChoice)
const paper = document.querySelector(".paper").addEventListener("click", getHumanChoice)
const scissors = document.querySelector(".scissors").addEventListener("click", getHumanChoice)

const r = "rock"
const p = "paper"
const s = "scissors"


function getHumanChoice (e) {
    if (e.currentTarget.classList.contains('rock')) {
     playRound(r)
   } else if (e.currentTarget.classList.contains('scissors')) {
      playRound(s);
   } else if (e.currentTarget.classList.contains('paper')) {
      playRound(p)
    } else return "none"
 }

//Single Round

//Entire Game

let humanScore = 0
let computerScore = 0
let round = 1

let humanScoreCount = document.createTextNode(humanScore)
let computerScoreCount = document.createTextNode(computerScore)
let roundScore = document.createTextNode(round)

document.querySelector(".player-score").appendChild(humanScoreCount)
document.querySelector(".computer-score").appendChild(computerScoreCount)
document.querySelector(".round-score").appendChild(roundScore)



function playRound(humanChoice) {
    let humanScore = 0
    let computerScore = 0
    let round = 1

    let humanScoreCount = document.createTextNode(humanScore)
    let computerScoreCount = document.createTextNode(computerScore)
    let roundScore = document.createTextNode(round)

    document.querySelector(".player-score").appendChild(humanScoreCount)
    document.querySelector(".computer-score").appendChild(computerScoreCount)
    document.querySelector(".round-score").appendChild(roundScore)
    
    let computerChoice = getComputerChoice(); 

   if ( humanChoice === r && computerChoice === "scissors" ) {
       console.log ("You win! Rock beats scissors!");
       humanScore++;
       
   } else if (humanChoice === p && computerChoice === "rock") {
       console.log("You Win! Paper beats rock!");
       humanScore++;
       
   } else if (humanChoice === s && computerChoice === "paper") {
       console.log ("You Win! Scissors beat paper!");
       humanScore++;
       
   } else if (humanChoice === r && computerChoice === "paper") {
       console.log ("You lose! Paper beats rock...");
       computerScore++; 
       
   } else if (humanChoice === p && computerChoice === "scissors") {
       console.log("You lose! Scissors beat paper...");
        computerScore++; 
        
   } else if (humanChoice === s && computerChoice === "rock") {
       console.log ("You lose! Rock beats scissors...");
       computerScore++; 
   } else {
       console.log("Draw; no winners or losers here...");
       
   }  
}

// //Entire Game

// function playGame() {
//    if (counter == 5 && humanScore > computerScore) {
//        console.log ("Congratulations! You win!")
//    } else if (counter == 5 && computerScore > humanScore) {
//        console.log ("Game over! You lose.");            
//    } else if (counter == 5 && computerScore == humanScore) {
//        console.log ("It's a tie! No winners or losers here...")
//    } else {
//        counter++;
//        playRound();
//    }              
//    }

// //    for (let i = 0; i < 5; i++) {
// //        console.log (playGame())
// //    }

// //    console.log (playGame())