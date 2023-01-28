import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form email'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onformInput, 1000));


function onFormSubmit(event) {
  event.preventDefault();
    event.currentTarget.reset();
    console.log('Send Data ' + localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    
    
}

function onformInput(event) {
    formData[event.target.name] = [event.target.value];
    console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(localStorage.getItem(STORAGE_KEY));
}


