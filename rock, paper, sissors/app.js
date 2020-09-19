/** @format */
let match = document.querySelector('.match');
let win = document.getElementById('win');
let user = document.getElementById('user');
let cpu = document.getElementById('cpu');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let userSpan = document.querySelector('.userSpan');
let cpuSpan = document.querySelector('.cpuSpan');
let arr = ['rock', 'paper', 'scissor'];
console.log(arr.length);

rock.addEventListener('click', () => {
  user.src = 'rock.png';
  userSpan.innerText = 'user: rock';
  check('rock', arr[Math.floor(Math.random() * arr.length)]);
});
paper.addEventListener('click', () => {
  user.src = 'paper.png';
  userSpan.innerText = 'user: paper';
  check('paper', arr[Math.floor(Math.random() * arr.length)]);
});
scissor.addEventListener('click', () => {
  user.src = 'scissors.jpg';
  userSpan.innerText = 'user: scissor';
  check('scissor', arr[Math.floor(Math.random() * arr.length)]);
});

function check(user, ai) {
  console.log('rock', user, ai);
  if (user === 'rock') {
    switch (ai) {
      case 'rock':
        cpu.src = 'rock.png';
        cpuSpan.innerText = 'cpu: rock';
        win.innerText = 'Tie!';
        break;
      case 'paper':
        cpu.src = 'paper.png';
        cpuSpan.innerText = 'cpu: paper';
        win.innerText = 'Lose!';
        break;
      case 'scissor':
        cpu.src = 'scissors.jpg';
        cpuSpan.innerText = 'cpu: scissor';
        win.innerText = 'Win!';
        break;
      default:
        return;
    }
  }

  if (user === 'paper') {
    switch (ai) {
      case 'rock':
        cpu.src = 'rock.png';
        win.innerText = 'Win!';
        cpuSpan.innerText = 'cpu: rock';
        break;
      case 'paper':
        cpu.src = 'paper.png';
        cpuSpan.innerText = 'cpu: paper';
        win.innerText = 'Tie!';
        break;
      case 'scissor':
        cpu.src = 'scissors.jpg';
        cpuSpan.innerText = 'cpu: scissor';
        win.innerText = 'Lose!';
        break;
      default:
        return;
    }
  }

  if (user === 'scissor') {
    switch (ai) {
      case 'rock':
        cpu.src = 'rock.png';
        win.innerText = 'Lose!';
        cpuSpan.innerText = 'cpu: rock';
        break;
      case 'paper':
        cpu.src = 'paper.png';
        cpuSpan.innerText = 'cpu: paper';
        win.innerText = 'Win!';
        break;
      case 'scissor':
        cpu.src = 'scissors.jpg';
        cpuSpan.innerText = 'cpu: scissor';
        win.innerText = 'Tie!';
        break;
      default:
        return;
    }
  }
}
