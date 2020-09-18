/** @format */

let password = document.getElementById('password');
let login = document.querySelector('.login');
let progressDiv = document.querySelector('.progress_div');
let progress = document.createElement('div');
let signedIn = document.createElement('span');

password.addEventListener('keyup', (e) => {
  console.log(e.keyCode);
  e.preventDefault();
  if (e.keyCode === 13) {
    if (password.value.length < 6) {
      progressDiv.innerText = 'password must be at least 6 characters';
    } else {
      progressDiv.innerText = null;
      progress.classList.add('progress_animation');
      progressDiv.appendChild(progress);
      setTimeout(appendSpan, 6000);
    }
  }
});

function appendSpan() {
  progressDiv.removeChild(progress);
  login.removeChild(password);
  signedIn.innerText = 'You signed in!';
  login.appendChild(signedIn);
}
