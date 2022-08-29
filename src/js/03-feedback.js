import throttle from 'lodash.throttle';
// console.log(throttle);

let savedInputData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputFormEvents);
form.addEventListener('submit', onFormSumbit);

onInputDataExist();

function onInputFormEvents(event) {
  savedInputData = localStorage.getItem('feedback-form-state');
  if (savedInputData) {
    savedInputData = JSON.parse(savedInputData);
  } else {
    savedInputData = {};
  }

  savedInputData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(savedInputData));
}

function onInputDataExist() {
  const getInputData = localStorage.getItem('feedback-form-state');

  if (getInputData) {
    const parseGetInputData = JSON.parse(getInputData);

    Object.entries(parseGetInputData).forEach(([key, value]) => {
      // console.log(key, value);
      form.elements[key].value = value;
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify(parseGetInputData)
      );
    });
  }
}

function onFormSumbit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(savedInputData);
}
throttle(onInputFormEvents, 500);
