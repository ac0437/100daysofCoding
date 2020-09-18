/** @format */

let a = document.getElementById('a');
let b = document.getElementById('b');
let aSpan = document.querySelector('.aSpan');
let bSpan = document.querySelector('.bSpan');
let hSpan = document.querySelector('.hSpan');
let value1 = 0;
let value2 = 0;

a.addEventListener('change', () => {
  if (a.value.length > 0) {
    value1 = a.value;
    aSpan.innerText = value1;
  }

  if (a.value.length > 0 && b.value.length > 0) {
    findHypotenuse();
  }
});

b.addEventListener('change', () => {
  if (b.value.length > 0) {
    value2 = b.value;
    bSpan.innerText = value2;
  }
  if (a.value.length > 0 && b.value.length > 0) {
    findHypotenuse();
  }
});

function findHypotenuse() {
  hypotenuse = Math.sqrt(a.value ** 2 + b.value ** 2);
  hSpan.innerText = hypotenuse.toFixed(2);
}
