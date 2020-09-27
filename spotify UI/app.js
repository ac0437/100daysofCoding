/** @format */

const hamburger = document.querySelector('.hamburger');

console.log(hamburger);
hamburger.addEventListener('click', function () {
  if (!hamburger.classList.contains('isactive')) {
    hamburger.classList.add('isactive');
  } else {
    hamburger.classList.remove('isactive');
  }
});
