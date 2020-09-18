/** @format */

let heads = document.querySelector('.heads');
let tails = document.querySelector('.tails');
let cpu = document.querySelector('.CPU');
let winner = document.querySelector('.winsDiv');
let playerWins = document.querySelector('.playerWins');
let cpuWins = document.querySelector('.cpuWins');
let coin = document.getElementById('coin');
let result = document.querySelector('.flip_result');
let htArr = ['Heads', 'Tails'];
let playerChoice;

heads.addEventListener('click', () => {
  random = Math.round(Math.random());
  cpuChoice = htArr[random];
  playerChoice = htArr[0];
  compare(playerChoice, cpuChoice);
  cpuChoice = '';
  return;
});

tails.addEventListener('click', () => {
  random = Math.round(Math.random());
  cpuChoice = htArr[random];
  playerChoice = htArr[1];
  compare(playerChoice, cpuChoice);
  return;
});

function compare(pHT, cHT) {
  result.innerText = `It's ${cHT}!`;
  if (cHT === 'Heads') {
    coin.src = './assets/heads.png';
    coin.classList.remove('rotate');
  }
  if (cHT === 'Tails') {
    coin.src = './assets/tails.png';
    coin.classList.remove('rotate');
  }

  if (pHT === cHT) {
    winner.innerHTML = `<span>Player wins!</span>`;
    playerWins.innerText = Number(playerWins.innerText) + 1;
  } else {
    winner.innerHTML = `<span>CPU wins!</span>`;
    cpuWins.innerText = Number(cpuWins.innerText) + 1;
  }
}
