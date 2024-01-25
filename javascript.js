function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3 + 1);
    switch(randomNum){
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function getPlayerChoice(){
    let playerChoice = window.prompt("Enter : Rock / Paper / Scissors").toLowerCase();
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        let letter = playerChoice.at(0);
        playerChoice = playerChoice.replace(letter, letter.toUpperCase())
        return playerChoice;
    }else{
        alert("You entered wrong string!")
    }
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        alert(`You won! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        alert(`You won! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        alert(`You won! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }else if(playerSelection === computerSelection){
        alert(`Draw!`);
        return 2;
    }else {
        alert(`You lost! ${computerSelection} beats ${playerSelection}.`);
        return 0;

    }
    
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        let score = playRound(getPlayerChoice(), getComputerChoice());
        if(score === 1){
            playerScore++;
            alert(`PlayerScore: ${playerScore} | ComputerScore: ${computerScore}`);
        }else if(score === 2){
            alert(`PlayerScore: ${playerScore} | ComputerScore: ${computerScore}`);
        }else {
            computerScore++;
            alert(`PlayerScore: ${playerScore} | ComputerScore: ${computerScore}`);
        }
        
    }
    if(playerScore == 5){
        alert("You Won!! Player wins");
    }else if(computerScore == 5){
        alert("You Lost!! Computer wins");
    }
}

game();

