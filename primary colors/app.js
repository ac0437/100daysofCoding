/** @format */

let redbtn = document.getElementById('btn-red');
let yellowbtn = document.getElementById('btn-yellow');
let bluebtn = document.getElementById('btn-blue');
let paintContainer = document.getElementById('img-color--container');

redbtn.addEventListener('click', () => {
  if (paintContainer.getAttribute('src') !== 'red.png') {
    paintContainer.src = 'red.png';
  } else {
    paintContainer.src = 'primary-colors.png';
  }
});
yellowbtn.addEventListener('click', () => {
  if (paintContainer.getAttribute('src') !== 'yellow.png') {
    paintContainer.src = 'yellow.png';
  } else {
    paintContainer.src = 'primary-colors.png';
  }
});
bluebtn.addEventListener('click', () => {
  if (paintContainer.getAttribute('src') !== 'blue.png') {
    paintContainer.src = 'blue.png';
  } else {
    paintContainer.src = 'primary-colors.png';
  }
});
