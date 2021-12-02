const email = document.getElementsByTagName('input')[0];
const password = document.getElementsByTagName('input')[1];
const btnForm = document.getElementsByTagName('button')[0];
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