/** @format */

let word = document.querySelector('.word');
let wordContainer = document.querySelector('.wordContainer');
let wordDiv = document.querySelector('.wordDiv');
let change = document.querySelector('#change');
let add = document.querySelector('.btn-add');
let start = document.querySelector('.btn-start');
let style = document.createElement('style');
document.head.appendChild(style);

let wordArr = [];

console.log(word.legnth);
if (wordArr.length === 0) {
  start.disabled = true;
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  if (change.value.length > 0) {
    wordArr.push(change.value);
  }
  start.disabled = false;
  change.value = '';
});

start.addEventListener('click', (e) => {
  e.preventDefault();
  scrollRate = -(48 * wordArr.length);
  vertical = `
    @keyframes vertical {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(${scrollRate}px);
      }
    }
  `;
  style.sheet.insertRule(vertical);
  wordDiv.classList.add('scroller');
  let para = wordArr.map((word) => {
    return `<p class="word">${word}</p>`;
  });
  wordDiv.innerHTML = ''.concat(para.join(''), para[0]);
  add.disabled = true;
});
