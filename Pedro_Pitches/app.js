/** @format */

let fastball = document.querySelector('.l-fastball');
let twoseamfastball = document.querySelector('.l-two-seam-fastball');
let cutfastball = document.querySelector('.l-cut-fastball');
let changeup = document.querySelector('.l-change-up');
let curve = document.querySelector('.l-curveball');
let ballDiv = document.querySelector('.ballDiv');
let display = document.querySelector('.imgDivAnchorDiv');
let pitches = document.querySelector('.pitches');

fastball.addEventListener('click', () => {
  fastball.classList.add('fastballA');
  setTimeout(() => fastball.classList.remove('fastballA'), 600);
});

twoseamfastball.addEventListener('click', () => {
  twoseamfastball.classList.add('two-seam-fastballA');
  setTimeout(() => twoseamfastball.classList.remove('two-seam-fastballA'), 700);
});

cutfastball.addEventListener('click', () => {
  cutfastball.classList.add('cut-fastballA');
  setTimeout(() => cutfastball.classList.remove('cut-fastballA'), 700);
});

changeup.addEventListener('click', () => {
  changeup.classList.add('change-upA');
  setTimeout(() => changeup.classList.remove('change-upA'), 1700);
});

curve.addEventListener('click', () => {
  curve.classList.add('curveballA');
  setTimeout(() => curve.classList.remove('curveballA'), 1900);
});

display.addEventListener('click', () => {
  display.classList.toggle('rotateArrow');
  if (!pitches.classList.contains('hidden')) {
    pitches.classList.add('hidden');
  } else {
    pitches.classList.remove('hidden');
  }
});
