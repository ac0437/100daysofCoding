/** @format */

const container = document.querySelector('.container');
const menu = document.querySelector('.menu');

console.log(document.querySelector('.container'), menu);

container.addEventListener('click', () => {
  if (!menu.classList.contains('show')) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
});
