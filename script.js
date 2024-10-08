// No parameters needed
// Returns input from the user in lowercase
function input() {
    let playerChoice = prompt("Rock, Paper, or Scissors: ");
    return playerChoice.toLowerCase();
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


//Start of Game
console.log("Welcome to the game of Rock Paper Scissors!\n\n");

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
        console.log("Congratulations you win this game!");
    }
    else {
        console.log("Sorry the compouter wins this game.");
    }
}
else {
    console.log("Wow looks like we have a tie!");
}
