import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onformInput, 1000));
if (localStorage.getItem(STORAGE_KEY)) {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData.message != undefined) refs.textarea.value = saveData.message || '';
  if (saveData.email != undefined) refs.email.value = saveData.email || '';
}

function onFormSubmit(event) {
  event.preventDefault();
   if (event.target.elements.email.value === "" || event.target.elements.message.value === "") { 
        return alert("Увага! Всі поля повинні бути заповнені!"); 
    };  
  event.currentTarget.reset();
  console.log('Send Data ' + localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function onformInput(event) {
  console.log(event.target);
  formData[event.target.name] = [event.target.value];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
