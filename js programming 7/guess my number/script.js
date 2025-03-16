'use strict';
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function updateScore(score) {
  document.querySelector('.score').textContent = score;
}
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.check').addEventListener('click', function () {
  let score = document.querySelector('.score').textContent;
  const guess = parseInt(document.querySelector('.guess').value);
  let prevscore = document.querySelector('.highscore').textContent;
  if (score > 1) {
    if (!guess) {
      displayMessage('No Number!');
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      updateScore(score);
    } else if (guess == secretNumber) {
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (prevscore < score) {
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else {
    displayMessage('You Lose!');
    updateScore('0');
    document.querySelector('body').style.backgroundColor = '#880808';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  updateScore('20');
  document.querySelector('.guess').value = null;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
