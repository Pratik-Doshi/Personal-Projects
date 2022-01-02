'use strict';

function displayMsg(msgDisplay) {
    document.querySelector('.msg').textContent = msgDisplay;
}

function displayScore(msgScore) {
    document.querySelector('#score').textContent = msgScore;
}

function displayHighScore(msgHighScore) {
    document.querySelector('#highscore').textContent = msgHighScore;
}

function displayGuessNumer(msgGuessNumer) {
    document.querySelector('#guess-number').textContent = msgGuessNumer;
}

function randomNumber() {
    return Math.trunc(Math.random() * 20);
}

let secNumber = randomNumber();
let score = 5;

document.querySelector('#agn-btn').addEventListener('click', function () {
    score = 5;
    secNumber = randomNumber();
    displayGuessNumer('?');
    displayScore('5');
    displayMsg('Start Guessing..');
    document.querySelector('.num-input').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})

document.querySelector('.ck-btn').addEventListener('click', function () {
    const num = Number(document.querySelector('.num-input').value);
    let highScore = Number(document.querySelector('#highscore').textContent);
    if (document.querySelector('.num-input').value !== '' && num >= 0 && num <= 20) {
        // if player has guess remaining
        if (score > 0) {
            //when player wins
            if (num === secNumber) {
                displayMsg('🎉 Correct Guess');
                displayGuessNumer(secNumber);
                if (score > highScore) {
                    displayHighScore(score);
                }
                document.querySelector('body').style.backgroundColor = '#60b347';
            }
            // when player guess number other than secret number
            else {
                const res = num > secNumber ? '⬆️ too high' : '⬇️ too low';
                displayMsg(res);
                score--;
                displayScore(score);
            }
        }
        // when player runs out of guess
        else {
            displayMsg('😨 Opps... You ran out of luck');
            displayGuessNumer(secNumber);
        }
    }
    // when an invalid input is submitted
    else {
        // if player has guess remaining
        if (score > 0) {
            displayMsg('Enter a Valid Number');
            score--;
            displayScore(score);
        }
        //when player runs out of guess
        else {
            displayMsg('😨 Opps... You ran out of luck');
            displayGuessNumer(secNumber);
        }
    }
})