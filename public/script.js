'use strict';
//set up
prompt('What is your name player?', '');
let secretNumber = Math.floor(Math.random() * 20);
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //if not a number
  if (typeof guess !== 'number') {
    document.querySelector('.message').textContent =
      'Please Choose a Number.π';
  }
  //if you lose
  if (score < 1) {
    document.querySelector('.message').textContent = 'π₯GAME OVER!!!';
    document.querySelector('.score').textContent = 0;
  }
  if (score > 0) {
    //if you win
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'You Guessed itππ';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      }
    }
    //if you guess wrong
    if (guess !== secretNumber) {
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Guess is to high!π';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Guess is to low!π';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
