/** @format */

let heads = document.querySelector('.heads');
let tails = document.querySelector('.tails');
let cpu = document.querySelector('.CPU');
let winner = document.querySelector('.winsDiv');
let playerWins = document.querySelector('.playerWins');
let cpuWins = document.querySelector('.cpuWins');
let coin = document.getElementById('coin');
let coin2 = document.getElementById('coin-2');
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
    coin.classList.remove('rotate');
    coin2.classList.remove('rotate');
    coin.style.zIndex = 10;
    coin2.style.zIndex = -1;
    coin.src = './assets/heads.png';
  }
  if (cHT === 'Tails') {
    coin.classList.remove('rotate');
    coin2.classList.remove('rotate');
    coin.style.zIndex = -1;
    coin2.style.zIndex = 10;
    coin.src = './assets/tails.png';
  }

  if (pHT === cHT) {
    winner.innerHTML = `<span>Player wins!</span>`;
    playerWins.innerText = Number(playerWins.innerText) + 1;
  } else {
    winner.innerHTML = `<span>CPU wins!</span>`;
    cpuWins.innerText = Number(cpuWins.innerText) + 1;
  }
}
