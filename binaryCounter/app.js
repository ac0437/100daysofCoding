/** @format */

let inputs = document.querySelectorAll('.input');
let total = document.querySelector('#total');
let totalSum = 0;
let binary;
let binaryArr = [];
let on = false;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', onOrOff);
}

function onOrOff(e) {
  if (e.target.innerHTML === '0') {
    e.target.innerHTML = 1;
    totalSum += Number(e.target.id);
    total.innerHTML = `Decimal: ${totalSum}`;
    return;
  }
  if (e.target.innerHTML === '1') {
    e.target.innerHTML = '0';
    totalSum -= Number(e.target.id);
    total.innerHTML = `Decimal: ${totalSum}`;
    return;
  }
}
