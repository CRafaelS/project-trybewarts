const email = document.getElementsByTagName('input')[0];
const password = document.getElementsByTagName('input')[1];
const btnForm = document.getElementsByTagName('button')[0];
const checkBox = document.getElementById('agreement');
const btnSend = document.getElementById('submit-btn');
const count = document.getElementById('counter');
const character = document.getElementById('textarea');

function formValidation() {
  const emailContent = email.value;
  const passwordContent = password.value;
  if (emailContent === 'tryber@teste.com' && passwordContent === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnForm.addEventListener('click', formValidation);

function enableSend() {
  if (checkBox.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
}
checkBox.addEventListener('click', enableSend);

function countCharacters() {
  const number = 500 - character.value.length;
  count.innerText = number;
  console.log(count);
}
character.addEventListener('keyup', countCharacters);
