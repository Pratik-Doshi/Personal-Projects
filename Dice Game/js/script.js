'use strict';

let total1el = document.querySelector('#total-1');
let total2el = document.querySelector('#total-2');
let score1el = document.querySelector('#score-1');
let score2el = document.querySelector('#score-2');
const showDiceRoll = document.querySelector('#dice');
const newGameBtn = document.querySelector('#newGameBtn');
const diceRollBtn = document.querySelector('#roll');
const diceRollResultImg = document.querySelector('#dice-img');
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');
const activePlayer1 = document.querySelector('.activemsg-1');
const activePlayer2 = document.querySelector('.activemsg-2');
const winningPlayer = document.querySelector('#wins');
const winnerPlayerMsg = document.querySelector('.winner-player');
let totalScore = [0, 0];
let activePlayer = 1;
let activeScore = 0;

//random number generator between 1 and 6
function roll() {
    return Math.trunc(Math.random() * 6) + 1;
}

//resetting the game.
newGameBtn.addEventListener('click', function () {
    total1el.textContent = 0;
    total2el.textContent = 0;
    score1el.textContent = 0;
    score2el.textContent = 0;
    totalScore = [0, 0];
    activePlayer = 1;
    activeScore = 0;
    showDiceRoll.classList.remove('dice-show');
    winnerPlayerMsg.classList.add('hidden');
    activePlayer1.classList.remove('hidden');
    player1.classList.add('current-player');
    player2.classList.remove('current-player');
})


//roll dice logic
diceRollBtn.addEventListener('click', function () {
    score1el.textContent = 0;
    score2el.textContent = 0;
    if (totalScore[0] < 100 && totalScore[1] < 100) {
        const diceResult = roll();
        //src of dice image changes based on generated random number.
        diceRollResultImg.src = `./img/dice-${diceResult}.png`;
        showDiceRoll.classList.add('dice-show');
        // if 6 on dice active player plays once again
        if (diceResult === 6) {
            activeScore += diceResult;
            document.querySelector(`#score-${activePlayer}`).textContent = activeScore;
        } else {
            activeScore += diceResult;
            totalScore[`${activePlayer - 1}`] = totalScore[`${activePlayer - 1}`] + activeScore;
            document.querySelector(`#score-${activePlayer}`).textContent = activeScore;
            document.querySelector(`#total-${activePlayer}`).textContent = totalScore[`${activePlayer - 1}`];
            activePlayer = activePlayer === 1 ? 2 : 1; //switch player
            activeScore = 0;
            player1.classList.toggle('current-player');
            player2.classList.toggle('current-player');
            activePlayer1.classList.toggle('hidden');
            activePlayer2.classList.toggle('hidden');
        }
    }

    //executes when total score of player 1 or player 2 is equal to grater than 100
    if (Number(total1el.textContent) >= 100 || Number(total2el.textContent) >= 100) {
        showDiceRoll.classList.remove('dice-show');
        const winner = totalScore[0] >= 100 ? 1 : 2;
        winningPlayer.textContent = `🎉 Player ${winner} Wins`;
        winnerPlayerMsg.classList.remove('hidden');
        activePlayer1.classList.add('hidden');
        activePlayer2.classList.add('hidden');
    }
})