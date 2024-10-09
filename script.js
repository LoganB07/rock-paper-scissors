function createGameBoard() {
    const gameArea = document.querySelector(".game-area");
    gameArea.setAttribute("style", "background-color: green;")
    
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    gameArea.appendChild(buttons);

    let buttonContainer1 = document.createElement("div");
    buttonContainer1.classList.add("button-container");
    buttons.appendChild(buttonContainer1);

    let buttonRock = document.createElement("button");
    buttonRock.classList.add("rock");
    buttonRock.textContent = "ROCK";
    buttonContainer1.appendChild(buttonRock);

    let buttonContainer2 = document.createElement("div");
    buttonContainer2.classList.add("button-container");
    buttons.appendChild(buttonContainer2);

    let buttonPaper = document.createElement("button");
    buttonPaper.classList.add("paper");
    buttonPaper.textContent = "PAPER";
    buttonContainer2.appendChild(buttonPaper);

    let buttonContainer3 = document.createElement("div");
    buttonContainer3.classList.add("button-container");
    buttons.appendChild(buttonContainer3);

    let buttonScissors = document.createElement("button");
    buttonScissors.classList.add("scissors");
    buttonScissors.textContent = "SCISSORS";
    buttonContainer3.appendChild(buttonScissors);

    let scoreboard = document.createElement("div");
    scoreboard.classList.add("scoreboard");
    gameArea.appendChild(scoreboard);

    let scoreTitle = document.createElement("h3");
    scoreTitle.classList.add("score-title");
    scoreTitle.textContent = "SCORE";
    scoreboard.appendChild(scoreTitle);

    let scores = document.createElement("div");
    scores.classList.add("scores");
    scoreboard.appendChild(scores);

    let scoreBox1 = document.createElement("div");
    scoreBox1.classList.add("player-score");
    scores.appendChild(scoreBox1);

    let playerScoreText = document.createElement("p");
    playerScoreText.classList.add("player-score");
    playerScoreText.textContent = "PLAYER SCORE: " + playerScore;
    scoreBox1.appendChild(playerScoreText);

    let scoreBox2 = document.createElement("div");
    scoreBox2.classList.add("comp-score");
    scores.appendChild(scoreBox2);

    let compScoreText = document.createElement("p");
    compScoreText.classList.add("comp-score");
    compScoreText.textContent = "COMPUTER SCORE: " + computerScore;
    scoreBox2.appendChild(compScoreText);

    const rockBtn = document.querySelector(".rock");
    rockBtn.addEventListener('click', () => {chooseRock(playerScoreText, compScoreText);});

    const paperBtn = document.querySelector(".paper");
    paperBtn.addEventListener('click', () => {choosePaper(playerScoreText, compScoreText);});

    const scissorsBtn = document.querySelector(".scissors");
    scissorsBtn.addEventListener('click', () => {chooseScissors(playerScoreText, compScoreText);});
    
}

function chooseRock(elem1, elem2) {
    let playerChoice = "rock";
    let compChoice = decisionMaker();
    playRound(playerChoice, compChoice);
    alert(`You chose: ${playerChoice}\nComputer chose: ${compChoice}`);
    elem1.textContent = "PLAYER SCORE: " + playerScore;
    elem2.textContent = "COMPUTER SCORE: " + computerScore;
}

function choosePaper(elem1, elem2) {
    let playerChoice = "paper";
    let compChoice = decisionMaker();
    playRound(playerChoice, compChoice);
    alert(`You chose: ${playerChoice}\nComputer chose: ${compChoice}`);
    elem1.textContent = "PLAYER SCORE: " + playerScore;
    elem2.textContent = "COMPUTER SCORE: " + computerScore;
}

function chooseScissors(elem1, elem2) {
    let playerChoice = "scissors";
    let compChoice = decisionMaker();
    playRound(playerChoice, compChoice);
    alert(`You chose: ${playerChoice}\nComputer chose: ${compChoice}`);
    elem1.textContent = "PLAYER SCORE: " + playerScore;
    elem2.textContent = "COMPUTER SCORE: " + computerScore;
}

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

function playRound(playerChoice, compChoice){
console.log(playerChoice);

console.log("Computer is making a choice...");

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

console.log(playerScore);
console.log(computerScore);
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
console.log("Welcome to the game of Rock Paper Scissors!\n\n");
let playerScore = 0;
let computerScore = 0;


const mainBtn = document.querySelector("#game-start");
mainBtn.addEventListener('click', () => {
    createGameBoard();
    });



