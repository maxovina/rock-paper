const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const displayWinner = document.querySelector('#displayWinner');
const choiceButtons = document.querySelectorAll('.choiceButton');
const winScreen= document.querySelector('#winScreen');
const winnerMessage = document.querySelector('#winnerMessage');

choiceButtons.forEach(button => {
    button.addEventListener('click', e => {
        let playerChoice = e.target.value;
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        if(Number(playerScore.textContent) == 5){
            resetGame(1);
        }else if(Number(computerScore.textContent) == 5){
            resetGame(0);
        }
    })
})

function resetGame(gameWinner){
    winScreen.classList.toggle('winScreen-hidden');
    winScreen.classList.toggle('winScreen');
    if(gameWinner == 0){
        winnerMessage.style.color = 'red';
        winnerMessage.textContent = 'YOU LOST!';
    }else if(gameWinner == 1){
        winnerMessage.style.color = '#24d833';
        winnerMessage.textContent = 'YOU WON!';
    }
    setTimeout(() => {
        let resetButton = document.createElement('button');
        resetButton.textContent = 'Restart the Game';
        resetButton.classList.toggle('resetButton')
        resetButton.addEventListener('click', () => {
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            winScreen.classList.toggle('winScreen-hidden');
            winScreen.classList.toggle('winScreen');
            winScreen.removeChild(resetButton);
        })
        winScreen.appendChild(resetButton);
    }, 2000)
}

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

function playRound(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        updateScore(1);
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        updateScore(1);
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        updateScore(1);
    }else if(playerSelection === computerSelection){
        updateScore(2);
    }else {
        updateScore(0);

    }
    
}

function updateScore(whoWon){
    if(whoWon == 1){
        let currentScore = Number(playerScore.textContent);
        playerScore.textContent = `${currentScore + 1}`;
        playerScore.style.fontWeight = '600';
        displayWinner.textContent = 'YOU WON!';
        displayWinner.style.color = '#24d833';
        
    }else if(whoWon == 0){
        let currentScore = Number(computerScore.textContent);
        computerScore.textContent = `${currentScore + 1}`;
        playerScore.style.fontWeight = '600';
        displayWinner.textContent = 'YOU LOST!';
        displayWinner.style.color = 'red';
    }else {
        displayWinner.textContent = 'DRAW';
        displayWinner.style.color = 'orange'
    }
}



