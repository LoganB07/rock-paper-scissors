// No parameters needed
// Returns input from the user in lowercase with validation
function input() {
    let playerChoice;
    let valid = false;
    const validChoices = ["rock", "paper", "scissors"];
    while (!valid){
        playerChoice = prompt("Rock, Paper, or Scissors: ");
        playerChoice = playerChoice.toLowerCase();
        for (let i = 0; i < 3; i++) {
            if (playerChoice == validChoices[i]){
                valid = true;
            }
        }
        if (!valid){
            console.log("Sorry please enter only rock, paper, or scissors.")
        }
    }
    return playerChoice;
}

// No parameters needed
// Returns random choice of rock, paper, or  scissors
function decisionMaker() {
    const MAX = 3;
    const MIN = 1;
    let choice;
    let number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    switch (number){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "scissors";
            break;
        case 3:
            choice = "paper";
            break;
        default:
            console.log("I have no idea how we got here");
    }
    return choice;
}

function playRound(){
    //Prompts user for input
let playerChoice = input();
console.log(playerChoice);

//Computers turn to choose
console.log("Computer is making a choice...");
let compChoice = decisionMaker();

//Determining the winner
console.log("Determining the winner...\n");
console.log("You picked: " + playerChoice + "  Computer picked: " + compChoice);

if (playerChoice != compChoice){
    let winFlag = false;
    if (playerChoice == "rock" && compChoice == "scissors"){
        winFlag =true;
    }
    if (playerChoice == "paper" && compChoice == "rock"){
        winFlag = true;
    }
    if (playerChoice == "scissors" && compChoice == "paper"){
        winFlag = true;
    }

    if (winFlag){
        console.log("Congratulations you win this round!");
        playerScore++;
    }
    else {
        console.log("Sorry the compouter wins this round.");
        computerScore++;
    }
}
else {
    console.log("Wow looks like we have a tie!");
    playerScore++;
    computerScore++;
}
}

function playGame(){
    for (let i = 0; i < 5; ++i){
        playRound();
    }
}

function announceWinner(playerScore, compScore) {
    console.log(`You scored: ${playerScore}  Computer scored: ${compScore}`);
    if (playerScore > compScore) {
        console.log("Wow you won the game! Good job!");
    }
    else if (playerScore < compScore) {
        console.log("Sorry you lost the game. Compuer wins.");
    }
    else {
        console.log("Wow you guys are evenly matched! It's a tie!");
    }
}


//Start of Game
let playerScore = 0;
let computerScore = 0;
console.log("Welcome to the game of Rock Paper Scissors!\n\n");

playGame();
announceWinner(playerScore, computerScore);

