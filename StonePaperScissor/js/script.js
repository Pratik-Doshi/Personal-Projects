'use strict';

const gameTitleBtn = document.querySelector('.game-title');
const playerImage = document.querySelector('.player-sel');
const computerImage = document.querySelector('.computer-sel');
const winnerPlayer = document.querySelector('.winner');
const stoneBtn = document.querySelector('#stone');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const optionArray = ['rock', 'paper', 'scissor'];
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;
let playerSelect = -1;
let compSelect = -1;
function randNumber() {
    return Math.trunc(Math.random() * 3)
}

function computerSelection() {
    compSelect = randNumber();
    switch (compSelect) {
        case 0:
            computerImage.src = "./images/rock.jpeg";
            break;
        case 1:
            computerImage.src = "./images/paper.jpeg";
            break;
        case 2:
            computerImage.src = "./images/scissor.jpeg";
            break;
    }
}

function displayWinner(str) {
    console.log(`Computer: ${optionArray[compSelect]}`);
    console.log(`Player: ${optionArray[playerSelect]}`);
    winnerPlayer.textContent = str;
}
function checkWinner() {
    if (optionArray[playerSelect] === 'rock') {
        if (optionArray[compSelect] === 'rock') {
            displayWinner('Draw');
        } else if (optionArray[compSelect] === 'paper') {
            displayWinner('computer wins');
            computerScore++;
        } else {
            displayWinner('player wins');
            playerScore++;
        }
    } else if (optionArray[playerSelect] === 'paper') {
        if (optionArray[compSelect] === 'rock') {
            displayWinner('player wins');
            playerScore++;
        } else if (optionArray[compSelect] === 'paper') {
            displayWinner('Draw');
        } else {
            displayWinner('computer wins');
            computerScore++;
        }
    } else {
        if (optionArray[compSelect] === 'rock') {
            displayWinner('computer wins');
            computerScore++;
        } else if (optionArray[compSelect] === 'paper') {
            displayWinner('player wins');
            playerScore++;
        } else {
            displayWinner('Draw');
        }
    }
}

function displayScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
stoneBtn.addEventListener('click', function () {
    playerImage.src = "./images/rock.jpeg";
    playerSelect = 0;
    computerSelection();
    checkWinner();
    displayScores();
})

paperBtn.addEventListener('click', function () {
    playerImage.src = "./images/paper.jpeg";
    playerSelect = 1;
    computerSelection();
    checkWinner();
    displayScores();
})

scissorBtn.addEventListener('click', function () {
    playerImage.src = "./images/scissor.jpeg";
    playerSelect = 2;
    computerSelection();
    checkWinner();
    displayScores();
})

gameTitleBtn.addEventListener('click', function () {
    playerImage.src = "./images/waiting.jpeg"
    computerImage.src = "./images/waiting.jpeg"
    playerSelect = -1;
    compSelect = -1;
    playerScore = 0;
    computerScore = 0;
    displayWinner("Let's Play");
    displayScores();
})