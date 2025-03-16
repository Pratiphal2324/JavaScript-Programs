'use strict';
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');
const holdbtn = document.querySelector('.btn--hold');
const rollbtn = document.querySelector('.btn--roll');
const newbtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
scoreP1.textContent = '0';
scoreP2.textContent = '0';
currentP1.textContent = '0';
currentP2.textContent = '0';
dice.classList.add('hidden');
function rolldice() {
  return Math.trunc(Math.random() * 6 + 1);
}
function switchPlayer() {
  if (
    document.querySelector('.player--active .name').textContent == 'Player 1'
  ) {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
}
holdbtn.addEventListener('click', function () {
  if (
    document.querySelector('.player--active .name').textContent == 'Player 1'
  ) {
    scoreP1.textContent =
      parseInt(scoreP1.textContent) + parseInt(currentP1.textContent);
    currentP1.textContent = '0';
  } else {
    scoreP2.textContent =
      parseInt(scoreP2.textContent) + parseInt(currentP2.textContent);
    currentP2.textContent = '0';
  }
  if (scoreP1.textContent >= 100 || scoreP2.textContent >= 100) {
    alert(
      `${document.querySelector('.player--active .name').textContent} WINS!!!`
    );
  }
  switchPlayer();
});
rollbtn.addEventListener('click', function () {
  let diceRolled = rolldice();
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRolled}.png`;
  if (
    document.querySelector('.player--active .name').textContent == 'Player 1'
  ) {
    currentP1.textContent = parseInt(currentP1.textContent) + diceRolled;
  } else {
    currentP2.textContent = parseInt(currentP2.textContent) + diceRolled;
  }
  if (diceRolled === 1) {
    if (
      document.querySelector('.player--active .name').textContent == 'Player 1'
    ) {
      currentP1.textContent = '0';
    } else {
      currentP2.textContent = '0';
    }
    switchPlayer();
  }
});
newbtn.addEventListener('click', function () {
  scoreP1.textContent = '0';
  scoreP2.textContent = '0';
  currentP1.textContent = '0';
  currentP2.textContent = '0';
  dice.classList.add('hidden');
});
