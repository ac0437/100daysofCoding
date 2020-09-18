/** @format */

const cir1 = document.querySelector('.cir1');
const cir2 = document.querySelector('.cir2');
let arr = ['#79989e', '#e19b55', '#c67c4a'];
let change = true;

setInterval(changeColor, 1000);

function changeColor() {
  if (change) {
    cir1.style.backgroundColor = '#c67c4a';
    cir2.style.backgroundColor = '#8c7857';
    change = false;
  } else {
    cir1.style.backgroundColor = '#79989e';
    cir2.style.backgroundColor = '#e19b55';
    change = true;
  }
}
