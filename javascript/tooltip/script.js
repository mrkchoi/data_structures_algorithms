// call blur() on submit for all buttons

const btnContainer = document.querySelector('.third');

btnContainer.addEventListener('click', handleSubmitFocusFix);


function handleSubmitFocusFix(e) {
  e.target.blur();
  console.log(e.target);
}