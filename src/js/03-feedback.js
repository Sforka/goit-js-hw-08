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

populateInput();

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


function populateInput() {
  const saveData = localStorage.getItem(STORAGE_KEY);
 
  if (saveData) {
 
    const parseSaveData = JSON.parse(saveData);
 
    Object.entries(parseSaveData).forEach(([name, value]) => {
      formData[name] = value;
      refs.form.elements[name].value = value;
    });
  };
}