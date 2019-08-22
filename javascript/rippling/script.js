

// setup event listener
// if clicked, set current input to checked
// toggle off class for all inputs
// toggle on for selected input

let formDiv = document.querySelector('.option__container');
let inputs = document.querySelectorAll(".radio_input"); 
let activeInput;

formDiv.addEventListener('click', handleFormClick);

function handleFormClick(e) {
  // if input value checked === true,
  // remove selected from all `option__choice-wrapper`
  // find parent div "option__choice-wrapper"
  // add `selected` class

  let allOptionParents = document.querySelectorAll('.option__choice-wrapper');

  allOptionParents.forEach(parent => {
    parent.classList.remove('selected');
  })  

  let closestParent = e.target.closest(".option__choice-wrapper");
  closestParent.classList.add('selected');
}  

