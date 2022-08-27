import throttle from 'lodash.throttle';
// console.log(throttle);

const dataInput = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputFormEvents);
form.addEventListener('submit', onFormSumbit);

onInputDataExist();

function onInputFormEvents(event) {
  dataInput[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));

  const savedInputData = localStorage.getItem('feedback-form-state');

  const parseInputData = JSON.parse(savedInputData);
  // console.log(parseInputData);
}

function onInputDataExist() {
  const getInputData = localStorage.getItem('feedback-form-state');

  if (getInputData) {
    const parseGetInputData = JSON.parse(getInputData);
    // console.log(parseGetInputData);

    form.email.value = parseGetInputData.email;
    form.message.value = parseGetInputData.message;
    //   console.log(parseGetInputData.email);
    //   console.log(parseGetInputData.message);
  }
}

function onFormSumbit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(dataInput);
}
throttle(onInputFormEvents, 500);
