import throttle from 'lodash.throttle';
// console.log(throttle);

const dataInput = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputFormEvents);
form.addEventListener('submit', onFormSumbit);

onInputDataExist();

function onInputFormEvents(event) {
  const savedInputData = localStorage.getItem('feedback-form-state');
  savedInputData = savedInputData ? JSON.parse(savedInputData) : {};
  dataInput[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));

  const parseInputData = JSON.parse(savedInputData);
}

function onInputDataExist() {
  const getInputData = localStorage.getItem('feedback-form-state');

  if (getInputData) {
    const parseGetInputData = JSON.parse(getInputData);

    form.email.value = parseGetInputData.email;
    form.message.value = parseGetInputData.message;
  }
}

function onFormSumbit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(dataInput);
}
throttle(onInputFormEvents, 500);
