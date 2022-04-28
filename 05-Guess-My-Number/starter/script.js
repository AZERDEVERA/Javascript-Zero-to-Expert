'use strict';


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

const displaySecretNumber = number => {
    document.querySelector('.number').textContent = number;
};

document.querySelector('.again').style.visibility = 'hidden';

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('No Input');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displaySecretNumber(secretNumber);
        document.querySelector('.again').style.visibility = 'visible';

        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;

        //when guess is to high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the Game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displaySecretNumber(secretNumber);

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});