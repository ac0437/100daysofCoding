/** @format */

const clock = document.querySelector('.timer');

setInterval(() => {
  clock.innerText = moment().format('LTS');
});
