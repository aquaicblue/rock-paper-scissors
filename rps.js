// /* Java Script for RPS*/

// //Computer's Choice

// function getComputerChoice() {
//     choice = Math.floor(Math.random() * 3 + 1)           
//         if (choice == 3) {
//          return 'rock';
//         } else if (choice == 2) {
//          return 'scissors';
//         } else return 'paper';
//         }

// // Human Choice

// const rock = document.querySelector(".rock").addEventListener("click", getHumanChoiceRock)
// const paper = document.querySelector(".paper").addEventListener("click", getHumanChoicePaper)
// const scissors = document.querySelector(".scissors").addEventListener("click", getHumanChoiceScissors)

// function getHumanChoiceRock(){   
//     console.log("rock");
//     playRound();
//     }

// function getHumanChoicePaper(){   
//     console.log("paper");
//     playRound();
//     }

// function getHumanChoiceScissors(){   
//     console.log("scissors");
//     playRound();
//     }



// //Single Round

// function playRound() {
// let humanChoiceRock = getHumanChoiceRock();
// let humanChoicePaper = getHumanChoicePaper();
// let humanChoiceScissors = getHumanChoiceScissors();
// let computerChoice = getComputerChoice(); 

// if (humanChoiceRock == "rock" && computerChoice == "scissors" ) {
//     console.log ("You win! Rock beats scissors!");
//                 humanScore++;
                
//     } else if (humanChoicePaper == "paper" && computerChoice == "rock") {
//         console.log("You Win! Paper beats rock!");
//         humanScore++;
                
//     } else if (humanChoiceScissors == "scissors" && computerChoice == "paper") {
//         console.log ("You Win! Scissors beat paper!");
//         humanScore++;
                
//     } else if (humanChoiceRock == "rock" && computerChoice == "paper") {
//         console.log ("You lose! Paper beats rock...");
//                 computerScore++; 
                
//     } else if (humanChoicePaper == "paper" && computerChoice == "scissors") {
//         console.log("You lose! Scissors beat paper...");
//         computerScore++; 
                 
//     } else if (humanChoiceScissors == "scissors" && computerChoice == "rock") {
//         console.log ("You lose! Rock beats scissors...");
//         computerScore++; 
//     } else {
//         console.log("Draw; no winners or losers here...");
                
//             }  
//         }

// //Entire Game
// let humanScore = 0
// let computerScore = 0
// let counter = 0

// // function playGame() {
    

// //     if (counter == 5 && humanScore > computerScore) {
// //         console.log ("Congratulations! You win!")

// //         } else if (counter == 5 && computerScore > humanScore) {
// //             console.log ("Game over! You lose.");            
// //         } else if (counter == 5 && computerScore == humanScore) {
// //             console.log ("It's a tie! No winners or losers here...")
// //         } else {
// //             counter++;
// //             playRound();
// //             }              
// //             }


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

function getHumanChoice (e) {
    if (e.target.classList.contains('rock')) {
     console.log("rock");
   } else if (e.target.classList.contains('scissors')) {
      return "scissors";
   } else if (e.target.classList.contains('paper')) {
      return "paper";
    } else return "none"

 }

// //Single Round

// function playRound() {
//    let humanChoice = getHumanChoice();
//    let computerChoice = getComputerChoice(); 

//    if (humanChoice == "rock" && computerChoice == "scissors" ) {
//        console.log ("You win! Rock beats scissors!");
//        humanScore++;
       
//    } else if (humanChoice == "paper" && computerChoice == "rock") {
//        console.log("You Win! Paper beats rock!");
//        humanScore++;
       
//    } else if (humanChoice == "scissors" && computerChoice == "paper") {
//        console.log ("You Win! Scissors beat paper!");
//        humanScore++;
       
//    } else if (humanChoice == "rock" && computerChoice == "paper") {
//        console.log ("You lose! Paper beats rock...");
//        computerScore++; 
       
//    } else if (humanChoice == "paper" && computerChoice == "scissors") {
//        console.log("You lose! Scissors beat paper...");
//         computerScore++; 
        
//    } else if (humanChoice == "scissors" && computerChoice == "rock") {
//        console.log ("You lose! Rock beats scissors...");
//        computerScore++; 
       
//    } else if (humanChoice == "none" ) {
//        console.log ("You didn't choose a weapon...");

//    } else {
//        console.log("Draw; no winners or losers here...");
       
//    }  
// }

// //Entire Game
// let humanScore = 0
// let computerScore = 0
// let counter = 0

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

//    for (let i = 0; i < 5; i++) {
//        console.log (playGame())
//    }

//    console.log (playGame())