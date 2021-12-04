const email = document.getElementById('email');
const password = document.getElementById('password');
const firstNameForm = document.getElementById('input-name');
const lastNameForm = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const houseForm = document.getElementsByClassName('house');
const familyForm = document.getElementsByClassName('family');
const subjectForm = document.getElementsByClassName('subject');
const rateForm = document.getElementsByClassName('rate');
const btnForm = document.getElementById('btnForm');
const checkBox = document.getElementById('agreement');
const btnSend = document.getElementById('submit-btn');
const count = document.getElementById('counter');
const character = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');
const formContent = document.getElementById('evaluation-form').children;

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

function removeForm() {
  while (formContent[0]) {
    formContent[0].remove();
  }
}

function getHouseValue() {
  let houseValue;
  for (let i = 0; i < houseForm.length; i += 1) {
    if (houseForm[i].selected) {
      houseValue = houseForm[i].value;
    }
  }
  return houseValue;
}

function getFamilyValue() {
  let familyValue;
  for (let i = 0; i < familyForm.length; i += 1) {
    if (familyForm[i].checked) {
      familyValue = familyForm[i].value;
    }
  }
  return familyValue;
}

function getSubjectValue() {
  let subjectValue = '';
  for (let i = 0; i < subjectForm.length; i += 1) {
    if (subjectForm[i].checked && subjectValue !== '') {
      subjectValue = `${subjectValue}, ${subjectForm[i].value}`;
    } else if (subjectForm[i].checked) {
      subjectValue = subjectForm[i].value;
    }
  }
  return subjectValue;
}

function getRateValue() {
  let rateValue;
  for (let i = 0; i < rateForm.length; i += 1) {
    if (rateForm[i].checked) {
      rateValue = rateForm[i].value;
    }
  }
  return rateValue;
}

function setContent() {
  const newName = `Nome: ${firstNameForm.value} ${lastNameForm.value}`;
  const newEmail = `Email: ${emailForm.value}`;
  const newHouse = `Casa: ${getHouseValue()}`;
  const newFamily = `Família: ${getFamilyValue()}`;
  const newSubject = `Matérias: ${getSubjectValue()}`;
  const newRate = `Avaliação: ${getRateValue()}`;
  const newObs = `Observações: ${character.value}`;
  removeForm();
  form.innerHTML = `<p>${newName}</p>
    <p>${newEmail}</p>
    <p>${newHouse}</p>
    <p>${newFamily}</p>
    <p>${newSubject}</p>
    <p>${newRate}</p>
    <p>${newObs}</p>`;
}
btnSend.addEventListener('click', setContent);
