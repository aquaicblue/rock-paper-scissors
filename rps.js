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
let computerScore =0
let round = 0

document.querySelector(".player-score").textContent = humanScore
document.querySelector(".computer-score").textContent = computerScore
document.querySelector(".round-score").textContent = round

function playRound(humanChoice) {
    
    let computerChoice = getComputerChoice(); 

   if ( humanChoice === r && computerChoice === "scissors" ) {
    document.querySelector(".message").textContent = "You win! Rock beats scissors!"
       console.log ("You win! Rock beats scissors!");
       humanScore++;
        checkScore();
       
   } else if (humanChoice === p && computerChoice === "rock") {
    document.querySelector(".message").textContent = "You Win! Paper beats rock!"
       console.log("You Win! Paper beats rock!");
       humanScore++;
       checkScore();
       
   } else if (humanChoice === s && computerChoice === "paper") {
    document.querySelector(".message").textContent = "You Win! Scissors beat paper!"
       console.log ("You Win! Scissors beat paper!");
       humanScore++;
       checkScore();
       
   } else if (humanChoice === r && computerChoice === "paper") {
    document.querySelector(".message").textContent = "You lose! Paper beats rock..."
       console.log ("You lose! Paper beats rock...");
       computerScore++; 
       checkScore();
       
   } else if (humanChoice === p && computerChoice === "scissors") {
    document.querySelector(".message").textContent = "You lose! Scissors beat paper..."
       console.log("You lose! Scissors beat paper...");
        computerScore++; 
        checkScore();
        
   } else if (humanChoice === s && computerChoice === "rock") {
    document.querySelector(".message").textContent = "You lose! Rock beats scissors..."
       console.log ("You lose! Rock beats scissors...");
       computerScore++; 
       checkScore();
   } else {
    document.querySelector(".message").textContent = "Draw; no winners or losers here..."
    checkScore();
       console.log("Draw; no winners or losers here...");
       
   }  
}

//Entire Game

let count = 0

function checkScore() {
   if (count === 4 && humanScore > computerScore) {
        document.querySelector(".message").textContent = "Congratulations! You win!"
       console.log ("Congratulations! You win!")
   } else if (count === 4 && computerScore > humanScore) {
        document.querySelector(".message").textContent = "Game over! You lose."
       console.log ("Game over! You lose.");            
   } else if (count === 4 && computerScore == humanScore) {
       console.log ("It's a tie! No winners or losers here...")
       document.querySelector(".message").textContent = "It's a tie! No winners or losers here..."
   } else {
        count++;
   }              
   }